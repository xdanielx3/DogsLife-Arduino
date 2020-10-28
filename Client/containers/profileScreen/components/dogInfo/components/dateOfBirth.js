import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Image, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles' 
import { MedBoldText, SmallText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class BirthDate extends PureComponent {

//    onPress = () => {
//        this.props.navigation.navigate('SetDateOfBirth');
//    }
  render(){
      const { dateOfBirth } = this.props.storeProfileScreen;
    return (
        <TouchableOpacity style={styles.viewHeight}>
          <MedBoldText>Birth date</MedBoldText>
          <View style={styles.rowViewSpaceBetween}>
            <SmallText style={[styles.textInput,styles.verticalCenterText]}>{dateOfBirth}</SmallText>
            <Image source={require('../../../../../images/right_arrow.png')}
                    style={styles.arrow} />
          </View>
        </TouchableOpacity>
  )
  }  
}

