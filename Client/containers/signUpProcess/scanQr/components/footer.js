import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {WhiteButton} from './whiteButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width * 0.88,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    position: 'absolute',
    bottom: height*0.05,
  },
});

export const Footer = props => {
  return (
    <View style={styles.container}>
        {props.isDone && (!props.twoDogs || props.onSecondDog)  ? <WhiteButton onPress={props.doneFunc} text={`Done!`} /> : null}
        {props.checkIdInServer ? <WhiteButton onPress={props.onPressDoneEnterId} text={`Done!`} /> : null}
        {props.isDone && (props.twoDogs && !props.onSecondDog) ? <WhiteButton onPress={props.secondDogFunc} text={`Second dog`}/> : null}
        {props.noCollar && !props.isDone ? <WhiteButton onPress={props.noCollarFunc} noCollar text={`I don't have a collar`}  /> : null}
    </View>
  );
};
