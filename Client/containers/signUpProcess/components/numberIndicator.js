import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import { MedText} from '../../../containers/styles/fonts';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  roundedNumber: {
    borderRadius:20,
    backgroundColor: 'white',
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export const NumberIndicator = props => {
    return (
        <View style={styles.roundedNumber}>
        <MedText style={{ color: props.col}}>{props.number}</MedText>
  </View>
  );
};