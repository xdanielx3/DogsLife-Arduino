import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import {MedBoldText} from '../../../styles/fonts';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    marginLeft: width* 0.05
  },
  clock: {
    borderRadius: 15,
    width: width * 0.08,
    height: width * 0.08,
    alignItems: 'center',
  },
});

export const ClockNote = () => {
  return (
    <View style={styles.container}>
              <Image
              source={require('../../../../images/clock_2.png')}
              style={styles.clock}
            />
           <MedBoldText style={styles.text}>Takes less than 5 minutes.</MedBoldText>
    </View>
  );
};
