import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const genderPlaceholder = {
    label: 'Gender',
    value: 3,
    color: '#9EA0A4',
  };

export const GenderPicker = props => {
    return (
        <View style={styles.outerView}>    
        <RNPickerSelect
        placeholder={genderPlaceholder}
        items={[
            { label: 'Female', value: 2 },
            { label: 'Male', value: 1 },
        ]}
        onValueChange={value => props.store.setGetAlongGender(value)}
        style={{
          ...pickerSelectStyles,
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

const SizePlaceholder = {
  label: 'Size',
  value: 3,
  color: '#9EA0A4',
};
export const SizePicker = props => {
  return (
      <View style={styles.outerView}>    
      <RNPickerSelect
      placeholder={SizePlaceholder}
      items={[
        { label: 'Small', value: 1 },
        { label: 'Big', value: 2 },
      ]}
      onValueChange={value => props.store.setGetAlongSize(value)}
      style={{
        ...pickerSelectStyles,
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

const SpayedPlaceholder = {
  label: 'Spayed',
  value: 3,
  color: '#9EA0A4',
};
export const SpayedPicker = props => {
  return (
      <View style={styles.outerView}>    
      <RNPickerSelect
      placeholder={SpayedPlaceholder}
      items={[
        { label: 'Spayed', value: 1 },
        { label: 'not Spayed', value: 2 },
      ]}
      onValueChange={value => props.store.setGetAlongSpayed(value)}
      style={{
        ...pickerSelectStyles,
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


const styles = StyleSheet.create({
    outerView: {
      height: height * 0.056,
      width: width * 0.87 / 3.1,
      backgroundColor: '#ffffff',       
      borderRadius: 10 
    },
  });

  const pickerSelectStyles = StyleSheet.create({
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
