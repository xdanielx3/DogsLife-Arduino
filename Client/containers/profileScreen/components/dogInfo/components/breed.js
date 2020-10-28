import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles'
import { MedBoldText, SmallText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class DogBreed extends PureComponent {
  render(){
    const { breed } = this.props.storeProfileScreen;
    return (
        <TouchableOpacity style={styles.viewHeight}>
          <MedBoldText>Breed</MedBoldText>
          <View style={styles.rowViewSpaceBetween}>
            <SmallText style={[styles.textInput,styles.verticalCenterText]}>{breed}</SmallText>
          </View>
        </TouchableOpacity>
  )
  }  
}

