import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {MedBoldText, MedText} from '../../../styles/fonts';
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
});

export const Header = props => {
  return (
    <View style={styles.container}>
       <ArrowLeft navigation={props.navigation} />
       {props.title ? <MedBoldText style={styles.text}>Build your own character</MedBoldText> : null}
        <NumberIndicator col={'#f19737'} number={'1'} />
    </View>
  );
};
