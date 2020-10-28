#include <CircularBuffer.h>
#include <SparkFunLSM6DS3.h>
#include <ArduinoBLE.h>
#include <TimeOut.h>
#include <string.h>
#include <RTCZero.h>
#include <stdint.h>
#include <SPI.h>
#include <WiFiNINA.h>
#include "utility/wifi_drv.h"
#include "arduino_secrets.h" 

// WIFI configuration
char ssid[] = SECRET_SSID;        // your network SSID (name)
char pass[] = SECRET_PASS;    // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0; 

int status = WL_IDLE_STATUS;
//IPAddress server(192,168,1,24); // batens2K1
//IPAddress server(10,0,0,11); // lunabaluna
//IPAddress server(172,20,10,2); // hens iphone wifi10 
IPAddress server(192,168,14,111); // daniel house
WiFiClient client;

// BLE configuration
BLEService dogService("19999998-00f2-537e-4f6c-d104768a1215"); // BLE Dog Service
BLEUnsignedCharCharacteristic batteryLevelChar("2102", BLERead | BLENotify);
CircularBuffer<char,100> dogsFoundAsFriends;

// For bluetooth use
BLECharacteristic dogFoundInRange("2101", BLERead, 6, true);
BLEUnsignedCharCharacteristic dogPedometer("2103", BLERead | BLENotify);
BLEUnsignedCharCharacteristic dogWalkUser("2104", BLERead | BLENotify);


//time control
RTCZero rtc;
Interval interval1AndHalf;
Interval interval2;
unsigned long currentTime;
unsigned long previousTime = 0;

//server handling
char server_pass[] = SERVER_PASS;
char stringToServer[9];
char emptyString[9];
char comma[2] = ",";
char params[40];

struct dog {
  int id; // convetred from char
  char bluetoothAddress[19]; 
  int meetCounter;
  bool shouldSentToUserApp;
  };

struct dog scannedDogs[10];

char addressCopy[19];
char stringToIdentifyCollars[4] = "Dog"; 
char emptyDogName[4];
char emptyDogID[2];
int dogID;
int isDogCollar = -9999; // if ==0 it is a dog collar

// transfer flag
bool isSent = false; // after true ,initialize all variables

void setup() {
  Serial.begin(9600);
  //while (!Serial); // wait
  Serial.println("setup DogId = 8, demo user dog");
  rtc.begin();
  rtc.setEpoch(1585742047);
  
  BLE.begin();
  
  // This collar information
  BLE.setLocalName("Dog8");
  BLE.setDeviceName("Dog_Black");
  
  BLE.setAdvertisedService(dogService);
  dogService.addCharacteristic(batteryLevelChar); // battery Level
  dogService.addCharacteristic(dogFoundInRange); // id
  BLE.addService(dogService);
  dogFoundInRange.writeValue((byte)0x00);
  BLE.advertise(); 
  
  interval2.interval(60000, checkForFriendDog);

  //interval1AndHalf.interval(90000, sendDogsBufferToServerViaUserHomeWifi); 
  interval1AndHalf.interval(80000, sendDogsBufferToServerViaUserHomeWifi); 
  BLE.scan();
}

void loop() { 
    Interval::handler();
    willDiscovered();
}

void checkForFriendDog(){
    Serial.print("checkForFriendDog\n  ");
    //print();
    for(int k=1; k<10; k++){
    if(scannedDogs[k].meetCounter >= 1){
       Serial.print("Found Dog friend : id               ->  ");
       Serial.println(scannedDogs[k].id);
       scannedDogs[k].shouldSentToUserApp = 1;
       dogsFoundAsFriends.push((scannedDogs[k].id)+'0');
      }
    }
}

bool isDogInArray(int dogID){
  if(scannedDogs[dogID].id == dogID) {
      return 1;
  }
   return 0;
}

void willDiscovered() {
    BLEDevice dev = BLE.available();
    if (dev.hasLocalName()) {
             Serial.println("device found");
             int deviceIdAfterCheck = isADogCollarAndInRange(dev);
             if(deviceIdAfterCheck > 0) {
                Serial.println("it is a dog collar");
                if(isDogInArray(dogID)){
                 Serial.print("dog id ->");
                 Serial.println(scannedDogs[dogID].id);
                 scannedDogs[dogID].meetCounter = scannedDogs[dogID].meetCounter + 1 ;
                 Serial.println(scannedDogs[dogID].meetCounter);
                  }
                else {
                  dogNotInArray(dev);
                 }
              }
       }     
  }

int isADogCollarAndInRange(BLEDevice dev){
     strncpy(emptyDogName, dev.localName().c_str(), 3);
     isDogCollar = strcmp(stringToIdentifyCollars, emptyDogName);
     if (isDogCollar == 0 && dev.rssi() <= -20 && dev.rssi() >= -70){ // it is a dog collar
        strncpy(emptyDogID, dev.localName().c_str() + 3, 1);
        dogID = (int)emptyDogID[0] - 48;
        return dogID;
     }
     isDogCollar = -9999;
     return 0;
  }

void dogNotInArray(BLEDevice dev){
   strncpy(scannedDogs[dogID].bluetoothAddress, dev.address().c_str(), sizeof(dev.address())+5);
   scannedDogs[dogID].id = dogID;
   scannedDogs[dogID].meetCounter++;
   Serial.print("New dog id               ->  ");
   Serial.println(scannedDogs[dogID].id);
   Serial.print("New dog bluetoothAddress ->  ");
   Serial.println(scannedDogs[dogID].bluetoothAddress);
   Serial.print("New dog meetCounter      ->  ");
   Serial.println(scannedDogs[dogID].meetCounter);
   Serial.println("");
  
  }


void print(){
  int h = rtc.getHours();
  int m = rtc.getMinutes();
  int s = rtc.getSeconds();

  String dateTime = "";
  if (h < 10) dateTime += "0";
  // add a zero for single-digit values:
  dateTime += h;
  dateTime += ":";
  if (m < 10) dateTime += "0";
  // add a zero for single-digit values:
  dateTime += m;
  dateTime += ":";
  if (s < 10) dateTime += "0";
  // add a zero for single-digit values:
  dateTime += s;
  dateTime += ",";

  Serial.println(dateTime);

}

void sendDogsBufferToServerViaUserHomeWifi(){
   Serial.println("sendDogsBufferToServerViaUserHomeWifi");
   if(!dogsFoundAsFriends.isEmpty()){ // if the buffer is empty, dont send to server
   BLE.stopScan();
   delay(1000);
   int storedDogsSize = dogsFoundAsFriends.size();
   Serial.println(stringToServer);
   char *c;
   char c1;
   Serial.print("storedDogsSize: ");
   Serial.println(storedDogsSize);
   for(int i=0; i<=storedDogsSize-1;i++){
        c1 = dogsFoundAsFriends.pop();
        Serial.print("dogsFoundAsFriends.pop(): ");
        Serial.println(c1);
        c = &c1;
       Serial.println(c);
       strncat(stringToServer,c, 1);
       if(i!=storedDogsSize-1){ // dont put comma
        strcat(stringToServer,comma);
        }
       Serial.println(stringToServer);
       Serial.print("stringToServer isEmpty: ");
       Serial.println(dogsFoundAsFriends.isEmpty());
    }
    if(!connectToWifi(stringToServer)){
      Serial.println("Connect to wifi failed");
      strcpy(stringToServer,emptyString);
      switch2BleMode();
      }
    else {
      Serial.println("POST request OK and BLE on");
      switch2BleMode();
      }
    }
}

bool connectToWifi(String body){
  if(switch2WiFiMode()){
    // check for the WiFi module:
    if (WiFi.status() == WL_NO_MODULE) {
      Serial.println("Communication with WiFi module failed!");
      // don't continue
      return false;
    }

  String fv = WiFi.firmwareVersion();
  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
    Serial.println("Please upgrade the firmware");
  }

  // attempt to connect to Wifi network:
    previousTime = millis();
  while (status != WL_CONNECTED) {
    currentTime = millis();
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);
    
    // wait 10 seconds for connection:
    delay(10000);

    if(currentTime - previousTime >= 30000){
    Serial.println("pass 30 seconds");
    break;
      }
  }
  
  if(status == WL_CONNECTED){
  Serial.println("Connected to wifi");
  printWifiStatus();
  

  // preparing request body   
  sprintf(params,"my_dog_id=8&pass=%s&matched_dogs_ids=%s",server_pass,stringToServer);
  Serial.print("request body:\n"); 
  Serial.println(params);
 
  postData(params); // build POST request
  return true;
    }
    return false;
  }
 }

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}


void postData(String body){
  char outBuf[64];
  int resCounter = 0;
  // close any connection before send a new request.
  // This will free the socket on the Nina module
  client.stop();
  
  if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
       Serial.println("WiFi.status()== WL_CONNECTED");
     if (client.connect(server, 5050)){
        Serial.println("connect(server, 5050)");
        client.println("POST /createDogMatch HTTP/1.1"); 
        client.println("Host: localhost");
        client.println(F("Connection: close\r\nContent-Type: application/x-www-form-urlencoded"));

        sprintf(outBuf,"Content-Length: %u\r\n",body.length());
        client.println(outBuf);
        // send the body (variables)
        client.println(body);
        client.println();
     //   Serial.println(client.available());
        Serial.print("is client connected ? => ");
        Serial.println(client.connected());
     }else{
      Serial.println("Error connecting to server");
     }
     while(!client.available()){}
     Serial.println(client.available());
      while (client.available()) {
        char c = client.read();
        Serial.write(c);
        if (c == '&') {
          Serial.println("\nresponse ok from server");
        }
        if(c == '$'){
          // send request again
          }
      }
    Serial.println();  
}
      delay(2000);
      Serial.println("posted Data in postData");
      strcpy(stringToServer,emptyString);
      resetAllDataStructs(); 
}

void resetAllDataStructs(){
  int f;
    for(f=1;f<=10; f++){
      scannedDogs[f].id = 0;
      scannedDogs[f].meetCounter = 0;
      scannedDogs[f].shouldSentToUserApp = 0;
    }
  
  }

void errorInServer(){
  

}

void switch2BleMode()
{
  BLE.begin();
  // This collar information
  BLE.setLocalName("Dog8");
  BLE.setDeviceName("Dog_Black");
  
  BLE.setAdvertisedService(dogService);
  dogService.addCharacteristic(batteryLevelChar); // battery Level
  dogService.addCharacteristic(dogFoundInRange); // id
  BLE.addService(dogService);
  dogFoundInRange.writeValue((byte)0x00);
  BLE.advertise(); 
  BLE.scan();
  
  Serial.println("BLE on");
}


bool switch2WiFiMode()
{
  BLE.stopAdvertise();
  BLE.end();
  Serial.println("BLE off");
  
  status = WL_IDLE_STATUS;

  // Re-initialize the WiFi driver
  // This is currently necessary to switch from BLE to WiFi
  wiFiDrv.wifiDriverDeinit();
  wiFiDrv.wifiDriverInit();

  return true;
}
