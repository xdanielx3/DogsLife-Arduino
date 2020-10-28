import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Image, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles' 
import { MedBoldText, SmallText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class Personality extends PureComponent {

//    onPress = () => {
//        this.props.navigation.navigate('SetPersonality');
//    }
  render(){
    return (
        <TouchableOpacity style={styles.viewHeight}>
          <MedBoldText>Personality</MedBoldText>
          <View style={styles.rowViewSpaceBetween}>
            <SmallText style={[styles.textInput,styles.verticalCenterText]}>Set Personality</SmallText>
            <Image source={require('../../../../../images/right_arrow.png')}
                    style={styles.arrow} />
          </View>
        </TouchableOpacity>
  )
  }  
}

