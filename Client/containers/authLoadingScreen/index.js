import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { inject, observer } from 'mobx-react';
import {ImageBackground} from 'react-native';
import { Logo } from '../../components/Logo';

@inject('rootStore')@observer
export class AuthLoadingScreen extends Component {
  componentDidMount() {
    setTimeout(() => {this.checkForToken()}, 2500)
  }
  checkForToken = async () => {
    let token = null;
    const userInfoString = await AsyncStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoString);    
    if(userInfo){
      token = userInfo.token;
      this.props.rootStore.setUserInfo(userInfo);
    }
    this.props.navigation.navigate(token ? 'AppScreens' : 'Auth');
  };

  render() {
    return (
        <ImageBackground
        source={require('../../images/background.png')}
        style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Logo />
        </ImageBackground>
    );
  }
}
