import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MedBoldText} from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {width: '88%', alignItems: 'flex-start'},
});

export const Question = props => {
  return (
    <View style={styles.container}>
      <MedBoldText>{props.text}</MedBoldText>
    </View>
  );
};
