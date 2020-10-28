import React, {Component} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const numOfDogsPlaceholder = {
  label: '0',
  value: 0,
  color: '#9EA0A4',
};

export const NumOfDogsPicker = props => {
  return (
      <View style={styles.numOfDogsOuterView}>    
      <RNPickerSelect
      placeholder={numOfDogsPlaceholder}
      items={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
      ]}
      onValueChange={value => props.store.setNumOfDogs(value)}
      style={{
        ...numOfDogsPickerSelectStyles,
        iconContainer: {
          top: 10,
          right: 7,
        },
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
          return <Icon name="down" size={18} color="black" />;
        }}
    />
    </View>
  );
};

const morningPlaceholder = {
    label: 'Morning',
    value: -1,
    color: '#9EA0A4',
  };

export const FeedMorning = props => {
    return (
        <View style={styles.feedingOuterView}>    
        <RNPickerSelect
        placeholder={morningPlaceholder}
        items={[
            { label: '6AM', value: '6' },
            { label: '7AM', value: '7' },
            { label: '8AM', value: '8' },
            { label: '9AM', value: '9' },
            { label: '10AM', value: '10' },
            { label: '11AM', value: '11' },
            { label: '12AM', value: '12' },
        ]}
        onValueChange={value => props.store.setFeedMorning(value)}
        style={{
          ...feedingPickerSelectStyles,
          iconContainer: {
            top: 10,
            right: 7,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
            return <Icon name="down" size={20} color="black" />;
          }}
      />
      </View>
    );
};

const NoonPlaceholder = {
  label: 'Noon',
  value: -1,
  color: '#9EA0A4',
};
export const FeedNoon = props => {
  return (
      <View style={styles.feedingOuterView}>    
      <RNPickerSelect
      placeholder={NoonPlaceholder}
      items={[
        { label: '1PM', value: '13' },
        { label: '2PM', value: '14' },
        { label: '3PM', value: '15' },
        { label: '4PM', value: '16' },
        { label: '5PM', value: '17' },
        { label: '6PM', value: '18' },
      ]}
      onValueChange={value => props.store.setFeedNoon(value)}
      style={{
        ...feedingPickerSelectStyles,
        iconContainer: {
          top: 10,
          right: 7,
        },
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
          return <Icon name="down" size={20} color="black" />;
        }}
    />
    </View>
  );
};

const EveningPlaceholder = {
  label: 'Evening',
  value: -1,
  color: '#9EA0A4',
};
export const FeedEvening = props => {
  return (
      <View style={styles.feedingOuterView}>    
      <RNPickerSelect
      placeholder={EveningPlaceholder}
      items={[
        { label: '7PM', value: '19' },
        { label: '8PM', value: '20' },
        { label: '9PM', value: '21' },
        { label: '10PM', value: '22' },
        { label: '11PM', value: '23' },
      ]}
      onValueChange={value => props.store.setFeedEvning(value)}
      style={{
        ...feedingPickerSelectStyles,
        iconContainer: {
          top: 10,
          right: 7,
        },
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
          return <Icon name="down" size={20} color="black" />;
        }}
    />
    </View>
  );
};

const Placeholder = {
  label: 'Select...',
  value: -1,
  color: '#9EA0A4',
};

export const Duration = props => {
  return (
    <View style={styles.durationOuterView}>
      <RNPickerSelect
        placeholder={Placeholder}
        items={[
          {label: '10 minutes', value: '10'},
          {label: '20 minutes', value: '20'},
          {label: '30 minutes', value: '30'},
          {label: '40 minutes', value: '40'},
          {label: 'Above 60 minutes', value: '60'},

        ]}
        onValueChange={value => props.onSelect(value)}
        style={{
          ...durationPickerSelectStyles,
          iconContainer: {
            top: 7,
            right: 12,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <Icon name="down" size={20} color="black" />;
        }}
      />
    </View>
  );
};

const BreedPlaceholder = {
  label: 'Select...',
  value: '',
  color: '#9EA0A4',
};

export const BreedPicker = props => {
  return (
    <View style={styles.breedView}>
      <RNPickerSelect
        placeholder={BreedPlaceholder}
        items={[
          {label: 'Golden Retriver', value: 'Golden Retriver'},
          {label: 'Bulldog', value: 'Bulldog'},
          {label: 'Corgi', value: 'Corgi'},
          {label: 'Akita', value: 'Akita'},
          {label: 'Boxer', value: 'Boxer'},
          {label: 'Border Collie', value: 'Border Collie'},
          {label: 'Australian Shepherd', value: 'Australian Shepherd'},
          {label: 'Chihuahua', value: 'Chihuahua'},
          {label: 'Canaan Dog', value: 'Canaan Dog'},
          {label: 'Rottweiler', value: 'Rottweiler'},
          {label: 'Dalmatian', value: 'Dalmatian'},
          {label: 'French Bulldog', value: 'French Bulldog'},
          {label: 'Belgian Malinois', value: 'Belgian Malinois'},
          {label: 'Beagle', value: 'Beagle'},
          {label: 'Boston Terrier', value: 'Boston Terrier'},
          {label: 'Pitbull', value: 'Pitbull'},
          {label: 'Siberian Husky', value: 'Siberian Husky'},
          {label: 'Alaskan Malamute', value: 'Alaskan Malamute'},

        ]}
        onValueChange={value => props.store.setBreed(value)}
        style={{
          ...breedPickerSelectStyles,
          iconContainer: {
            top: 10,
            right: 12,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <Icon name="down" size={20} color="black" />;
        }}
      />
    </View>
  );
};

const EnergyPlaceholder = {
  label: 'Select...',
  value: '',
  color: '#9EA0A4',
};

export const EnergyLevel = props => {
  return (
      <View style={styles.outerView}>    
      <RNPickerSelect
      placeholder={EnergyPlaceholder}
      items={[
          { label: 'Low', value: 1 },
          { label: 'Medium', value: 2 },
          { label: 'High', value: 3 },
      ]}
      onValueChange={value => props.store.setEnergyLevel(value)}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: 10,
          right: 12,
        },
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
          return <Icon name="down" size={20} color="black" />;
        }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
    outerView: {
      height: height * 0.056,
      width: width * 0.87,
      backgroundColor: '#ffffff',       
      borderRadius: 10 
    },
    durationOuterView: {
      height: height * 0.056,
      width: width * 0.365,
      backgroundColor: '#ffffff',       
      borderRadius: 10,
    },
    feedingOuterView: {
      height: height * 0.056,
      width: width * 0.87 / 3.1,
      backgroundColor: '#ffffff',       
      borderRadius: 10 
    },
    numOfDogsOuterView: {
      height: height * 0.056,
      width: width * 0.19,
      backgroundColor: '#ffffff',       
      borderRadius: 10 
    },
    breedView:{
        height: height * 0.056,
        width: width * 0.5,
        backgroundColor: '#ffffff',       
        borderRadius: 10,
    }
  });

  const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        height: height * 0.056,
        width: width * 0.88,
        fontSize: width * 0.04,
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 15,
        fontWeight: 'bold',
        color:'black',
      paddingRight: 30,
    },
  });

  const feedingPickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        height: height * 0.056,
        width: width * 0.88 /3.1,
        fontSize: width * 0.04,
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 15,
        fontWeight: 'bold',
        color:'black',
      paddingRight: 30,
    },
  });

  const numOfDogsPickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        height: height * 0.056,
        width: width * 0.2,
        fontSize: width * 0.04,
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 15,
        fontWeight: 'bold',
        color:'black',
      paddingRight: 30,
    },
  });

  const durationPickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        height: height * 0.056,
        width: width * 0.365,
        fontSize: width * 0.04,
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 8,
        fontWeight: 'bold',
        color:'black',
      paddingRight: 30, 
    },
  });
  const breedPickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        height: height * 0.056,
        width: width * 0.5,
        fontSize: width * 0.04,
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 15,
        fontWeight: 'bold',
        color:'black',
      paddingRight: 30,
    },
  });
