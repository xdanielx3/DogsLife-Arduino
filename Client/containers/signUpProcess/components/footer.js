import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {WhiteButton} from './whiteButton';
import {PrograssBar} from './prograssBar';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.05,
  },
});

export const Footer = props => {
  return (
    <View style={styles.container}>
      {props.removeBar ? null : <PrograssBar number={props.screenNumber} />}
        <WhiteButton
          onPressNoCollar={props.onPressNoCollar}
          noCollarNeed={props.noCollarNeed}
          dogInSystem={props.dogInSystem}
          onPress={props.onPress}
          navigation={props.navigation}
          text={props.text}
          next={props.next}
          params={props.params}
        />

    </View>
  );
};
