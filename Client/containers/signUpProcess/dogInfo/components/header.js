import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {MedBoldText,SmallBoldText} from '../../../styles/fonts';
import {ArrowLeft} from '../../../../components/arrowLeft';
import {NumberIndicator} from '../../components/numberIndicator'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    top: height * 0.03,
    width: width * 0.87,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
  },
  emptyArrow: {
    width: width * 0.12
  }
});

export const Header = props => {
  return (
    <View style={styles.container}>
       {!props.onSecondDog ? <ArrowLeft navigation={props.navigation} /> : <View style={styles.emptyArrow} />}
       {props.title && !props.onSecondDog ? <MedBoldText style={styles.text}>Build your dog character</MedBoldText> : null}
       {props.title && props.onSecondDog? <SmallBoldText style={styles.text}>Build your second dog character</SmallBoldText> : null}
        <NumberIndicator col={'#7b4812'} number={'2'} />
    </View>
  );
};
