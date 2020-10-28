import React from 'react';
import {
  ImageBackground,
} from 'react-native';
import{ Logo} from '../../../components/Logo'

export const LoadingLogo = () => {
    return (
        <ImageBackground
        source={require('../../../images/background.png')}
        style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Logo />
        </ImageBackground>
    );
}