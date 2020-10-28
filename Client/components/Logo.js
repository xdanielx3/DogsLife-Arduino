import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const Logo = props => (
    <View style={styles.dogslifeContainer}>
      <Image
        source={require('../images/name.png')}
        style={[styles.dogslife, props.logoStyle]}
      />
  </View>
);


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pugContainer: {
    height: width * 0.35,
    alignItems: 'center',
  },
  pug: {
    resizeMode: 'contain',
    height: '100%',
  },
  dogslifeContainer: {
    alignItems: 'center',
  },
  dogslife: {
    resizeMode: 'contain',
    height: width * 0.8,
  },
});
