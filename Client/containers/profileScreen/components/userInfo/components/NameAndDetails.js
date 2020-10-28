import React from 'react';
import styles from '../../../../styles/ProfileStyle';
import {
  TouchableOpacity,
} from 'react-native';
import { MedBoldText, SmallText } from '../../../../styles/fonts';


const NameAndDetails = props => {
  return (
    <TouchableOpacity>
        <MedBoldText style={styles.name}>{props.name}</MedBoldText>
        <SmallText>{props.email}</SmallText>
    </TouchableOpacity>
  );
};

export default NameAndDetails;
