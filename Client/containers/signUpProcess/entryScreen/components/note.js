import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import { MedText } from '../../../../containers/styles/fonts';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width ,
    height: height * 0.09, 
    justifyContent: 'center',
    backgroundColor: '#413943',
    elevation:8,
    alignItems: 'center',
  },
  text1: {
    color: 'white',
  },
  text2: {
    color: 'white',
  }
});

export const Note = () => {
  return (
    <View style={styles.container}>
        <MedText style={styles.text1}>We need to know you in order to</MedText>
        <MedText style={styles.text2}>best fit the system for you</MedText>
    </View>
  );
};
