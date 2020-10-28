import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {ImageBackground} from 'react-native';
import {Logo} from '../../components/Logo';
import {TextInputWithF} from '../../components/textInputWithF';
import {SignInButton} from './components/SignInButton';
import {JoinButton} from './components/JoinButton';
import {StoreLoginScreen} from './store';
import {ErrorMsg} from '../../components/errorMsg';
import {VerticalSpaceP} from '../../components/verticalSpace';
import {LoadingLogo} from './components/loadingLogo';

@inject('rootStore')
@observer
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.storeLoginScreen = new StoreLoginScreen(props.rootStore);
  }

  onChangeEmailText = text => {
    this.storeLoginScreen.setEmail(text);
  };

  onChangePaswordText = text => {
    this.storeLoginScreen.setPassword(text);
  };

  render() {
    const {loading} = this.props.rootStore;
    return (
      <MobxProvider storeLoginScreen={this.storeLoginScreen}>
        {!loading ? (
          <ImageBackground
            source={require('../../images/background.png')}
            style={{flex: 1}}>
            <Logo />
            <TextInputWithF
              placeholder={'E-mail'}
              onChange={this.onChangeEmailText}
            />
            <VerticalSpaceP height={0.015} />
            <TextInputWithF
              secureTextEntry
              placeholder={'Password'}
              onChange={this.onChangePaswordText}
            />
            <VerticalSpaceP height={0.015} />
            <ErrorMsg height={50} store={this.storeLoginScreen} />
            <SignInButton navigation={this.props.navigation} />
            <JoinButton navigation={this.props.navigation} />
          </ImageBackground>
        ) : (
          <LoadingLogo />
        )}
      </MobxProvider>
    );
  }
}
