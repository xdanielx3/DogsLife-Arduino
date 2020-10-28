import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {MedText} from '../../../styles/fonts';
import {VerticalSpace} from '../../../../components/verticalSpace';
import {NumberIndicator} from '../../components/numberIndicator';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    marginLeft: width * 0.05,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Insructions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <NumberIndicator col={'#f19737'} number={'1'} />
        <MedText style={styles.text}>Build your own character.</MedText>
      </View>
      <VerticalSpace height={10} />
      <View style={styles.row}>
        <NumberIndicator col={'#7b4812'} number={'2'} />
        <MedText style={styles.text}>Build your dog character.</MedText>
      </View>
      <VerticalSpace height={10} />
      <View style={styles.row}>
        <NumberIndicator col={'#413943'} number={'3'} />
        <MedText style={styles.text}>Scan dog collar.</MedText>
      </View>
    </View>
  );
};
