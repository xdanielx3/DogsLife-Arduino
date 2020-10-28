import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Image, View, TouchableOpacity } from 'react-native';
import styles from '../styles'
import { MedBoldText, SmallText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class AccountPrivacy extends PureComponent {

    //    onPress = () => {
//        this.props.navigation.navigate('SetAccountPrivacy');
//    }
  render(){
    const { accountPrivacy } = this.props.storeProfileScreen;
    return (
        <TouchableOpacity style={styles.viewHeight}>
          <MedBoldText>Account Privacy</MedBoldText>
          <View style={styles.rowViewSpaceBetween}>
            <SmallText style={[styles.textInput,styles.verticalCenterText]}>{accountPrivacy}</SmallText>
            <Image source={require('../../../../../images/right_arrow.png')}
                    style={styles.arrow} />
          </View>
        </TouchableOpacity>
  )
  }  
}

