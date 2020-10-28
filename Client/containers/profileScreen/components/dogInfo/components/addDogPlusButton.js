import React from 'react';
import styles from '../../../../styles/ProfileStyle';
import {
    Image,
  TouchableOpacity,
} from 'react-native';

export const AddDogPlusButton = props => {
  return (
    <TouchableOpacity style={styles.addDogPlusButton} onPress={props.onPress}>
        <Image style={styles.plusSize} source={require('../../../../../images/plus.png')} />
    </TouchableOpacity>
  );
};