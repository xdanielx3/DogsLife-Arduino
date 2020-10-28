import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: height*0.1
  },
  fullOpacity: {
    width: (width * 0.7)/8,
    height: height *0.01,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  semiOpacity: {
    backgroundColor: 'white',
    width: (width * 0.7)/8,
    height: height *0.01,
    opacity: 0.4,
    borderRadius: 10,

  },
});

export const PrograssBar = props => {
  return (
    <View style={styles.container}>
        <View style={props.number == 1 ? styles.fullOpacity : styles.semiOpacity} />
        <View style={props.number == 2 ? styles.fullOpacity : styles.semiOpacity} />
        <View style={props.number == 3 ? styles.fullOpacity : styles.semiOpacity} />
        <View style={props.number == 4 ? styles.fullOpacity : styles.semiOpacity} />
        <View style={props.number == 5 ? styles.fullOpacity : styles.semiOpacity} />
        <View style={props.number == 6 ? styles.fullOpacity : styles.semiOpacity} />
        <View style={props.number == 7 ? styles.fullOpacity : styles.semiOpacity} />
    </View>
  );
};
