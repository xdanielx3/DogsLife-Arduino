import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ArrowLeft = props => (
  <TouchableOpacity style={[props.register? styles.touchableOpacityRegisterArea : styles.touchableOpacityArea , props.style]} onPress={() => props.navigation.goBack()}>
      <Image
        source={props.white ? require('../images/arrow_right_white.png') : require('../images/left_chevron.png')}
        style={props.white ? styles.bigArrow : styles.smallArrow}
      />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchableOpacityArea: {
    width: width * 0.12,
  },
  touchableOpacityRegisterArea: {
    height: width * 0.12,
    width: width * 0.12,
    marginLeft: 30,
    marginTop: 15
  },
  container: {
    display: 'flex',
    paddingVertical: 10,
  },
  smallArrow: {
    height: height * 0.075,
    width: width * 0.045,
  },
  bigArrow: {
    height: height * 0.06,
    width: width * 0.06,
  },
  pressSize: {
    height: height * 0.1,
    width: width * 0.1,
  },
});
