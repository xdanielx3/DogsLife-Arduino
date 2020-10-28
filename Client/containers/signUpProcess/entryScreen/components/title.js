import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import { BigBoldText } from '../../../../containers/styles/fonts';
import { VerticalSpace } from '../../../../components/verticalSpace';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width * 0.5,
    alignItems: 'center',
    top: width * 0.05,
  },
  text1: {
    color: 'white',
  },
  text2: {
    color: '#4f392b',
  },
  text3: {
    marginLeft: width*0.03,
    color: '#413943',
  },
  text4: {
    marginLeft: width*0.03,
    color: '#4f392b',
  },
  dogs3: {
    width: width,
    height: height * 0.29,
  },

  row: {
    flexDirection: 'row'
  }
});

export const Title = () => {
  return (
    <View style={styles.container}>
      <BigBoldText style={styles.text1}>DOG'S LIFE</BigBoldText>
      <View style={styles.row}>
        <BigBoldText style={styles.text2}>REGISTRATION</BigBoldText>
        <BigBoldText style={styles.text4}>PROCESS</BigBoldText>
      </View>
      <VerticalSpace height={10} />
      <Image
              source={require('../../../../images/3dogs.png')}
              style={styles.dogs3}
            />
    </View>
  );
};
