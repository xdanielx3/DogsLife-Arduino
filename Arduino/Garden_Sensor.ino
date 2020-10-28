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
IPAddress server(216,239,36,54); // firebase
//IPAddress server(10,0,0,11); // lunabaluna
//IPAddress server(172,20,10,2); // wifi10
//IPAddress server(10,0,0,6); // Hen_Aharon

//WiFiClient client("us-central1-maxhendaniel.cloudfunctions.net", 80);
WiFiClient client;
// BLE configuration

BLEService gardenSensorDevice("29999999-00f2-537e-4f6c-d104768a1215"); // BLE Dog Service
BLEUnsignedCharCharacteristic batteryLevelChar("2102", BLERead | BLENotify);
CircularBuffer<char,100> dogsInGardenBuffer;

//time control
RTCZero rtc;
Interval interval1AndHalf;

//server handling
char server_pass[] = SERVER_PASS;
char stringToServer[9];
char emptyString[9];
char comma[2] = ",";
char params[40];
char gardenId[] = "301";


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
  while (!Serial); // wait
  Serial.println("setup Garden_Sensor 301");
  rtc.begin();
  rtc.setEpoch(1585742047);
  
  BLE.begin();
  
  // This collar information
  BLE.setLocalName("Garden_Sensor_301");
  
  BLE.setAdvertisedService(gardenSensorDevice);
  gardenSensorDevice.addCharacteristic(batteryLevelChar); // battery Level
  BLE.addService(gardenSensorDevice);
  BLE.advertise();

  BLE.setEventHandler(BLEDiscovered, discovered);
  //interval1AndHalf.interval(90000, sendDogsBufferToServer); 
  interval1AndHalf.interval(30000, sendDogsBufferToServer); 

  BLE.scan();
}

void loop() { 
    Interval::handler();
    BLE.poll(60000);
    }

void discovered(BLEDevice dev) {
    if (dev.hasLocalName()) {
             Serial.print("device found ==>");
             Serial.println(dev.localName());
             strncpy(emptyDogName, dev.localName().c_str(), 3);
             Serial.print("emptyDogName ==>");
             Serial.println(emptyDogName);
              isDogCollar = strcmp(stringToIdentifyCollars, emptyDogName);
             Serial.print("isDogCollar ==>");
             Serial.println(isDogCollar);
              Serial.print("before if device found ==>");
              Serial.println(dev.rssi());
              if (isDogCollar == 0 && dev.rssi() >= -53 ){ // it is a dog collar
                  Serial.println("in if device found");
                  Serial.println(dev.rssi());
                  strncpy(emptyDogID, dev.localName().c_str() + 3, 1);
                  Serial.println("emptyDogID");
                  Serial.println(emptyDogID);
                  dogsInGardenBuffer.push(emptyDogID[0]);
                  Serial.print("dog found ");
                  Serial.println(dogsInGardenBuffer.last());
                  //dogID = (int)emptyDogID[0] - 48;
                  if(dogsInGardenBuffer.isFull()){
                    Serial.print("dogsInGardenBuffer isFull: ");
                    Serial.println(dogsInGardenBuffer.isFull());
                    sendDogsBufferToServer();
                    }
              }
       }
       isDogCollar = -9999;     
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

void sendDogsBufferToServer(){
//   if(!dogsInGardenBuffer.isEmpty()){ // if the buffer is empty, dont send to server
   BLE.stopScan();
   delay(1000);
   int storedDogsSize = dogsInGardenBuffer.size();
   //strcat(stringToServer,serverPassword);
   //strcat(stringToServer,zero);
   Serial.println(stringToServer);
   char *c;
   char c1;
   Serial.print("storedDogsSize: ");
   Serial.println(storedDogsSize);
   for(int i=0; i<=storedDogsSize-1;i++){
        c1 = dogsInGardenBuffer.pop();
        Serial.print("dogsInGardenBuffer.pop(): ");
        Serial.println(c1);
        c = &c1;
       Serial.println(c);
       strncat(stringToServer,c, 1);
       if(i!=storedDogsSize-1){ // dont put comma
        strcat(stringToServer,comma);
        }
       Serial.println(stringToServer);
       Serial.print("stringToServer isEmpty: ");
       Serial.println(dogsInGardenBuffer.isEmpty());
    }
    if(!connectToWifi(stringToServer)){
      Serial.println("Connect to wifi failed");
      }
    else {
      Serial.println("POST request OK and BLE on");
      }
    }
//}

bool connectToWifi(String body){
  char gardenID[11];
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
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);

    // wait 10 seconds for connection:
    delay(10000);
  }
  Serial.println("Connected to wifi");
  printWifiStatus();

  // preparing request body   
  sprintf(params,"garden_id=%s&pass=%s&dogs_ids=%s",gardenId,server_pass,stringToServer);
  Serial.print("request body:\n"); 
  Serial.println(params);
 
  postData(params);
  return true;
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
     if (client.connect(server, 80)){
        Serial.println("connect(server, 80)");
        client.println("POST /App/dogsEnterGarden HTTP/1.1"); 
        client.println("Host: us-central1-maxhendaniel.cloudfunctions.net");
        //client.println(F("\r\nContent-Type: application/x-www-form-urlencoded"));
        
        //client.println(F("Connection: close\r\nContent-Type: application/x-www-form-urlencoded"));
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
      Serial.println("Error connecting to server"); // יש בעיה מפסיק את הפעילות
      return;
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
      switch2BleMode();

}

void errorInServer(){
  

}

void switch2BleMode()
{
  BLE.begin();
  
  // This collar information
  BLE.setLocalName("Garden_Sensor_301");
  
  BLE.setAdvertisedService(gardenSensorDevice);
  gardenSensorDevice.addCharacteristic(batteryLevelChar); // battery Level
  BLE.addService(gardenSensorDevice);
  BLE.advertise();

  BLE.setEventHandler(BLEDiscovered, discovered);

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
