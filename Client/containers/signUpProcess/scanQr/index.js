import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {ScanBigQuestionText, BigBoldText} from '../../styles/fonts';
import styled from 'styled-components/native';
import {Header} from './components/header';
import {VerticalSpaceP} from '../../../components/verticalSpace';
import {Footer} from './components/footer';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/AntDesign';
import {sendSignupInfo, sendNewUserInfo, isDogIdExist} from '../store/routes';
import {TextInputWithF} from '../../../components/textInputWithF';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

@inject('rootStore')
@observer
export class ScanCollarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScanned: false,
      isDone: false,
      mac_id: '',
      dogId: null,
      isHaveCollar: true,
      errorText: null,
      checkIdInServer: false,
    };
  }

  onSuccess = e => {
    this.setState({isScanned: true, isDone: true, mac_id: e.data});
  };

  onPressDone = () => {
    const macId = this.state.mac_id;
    const {dogInSystem} = this.props.navigation.state.params;
    if (dogInSystem) {
      sendNewUserInfo({
        signupUserObject: this.props.navigation.state.params,
        macId,
      });
      this.props.navigation.navigate('SignupFinish');
    } else {
      sendSignupInfo({
        signupUserObject: this.props.navigation.state.params.signupUserObject,
        signupDogObject: Object.assign(
          this.props.navigation.state.params.signupDogObject,
          macId,
        ),
      });
      this.props.navigation.navigate('SignupFinish');
    }
  };

  onPressNoCollar = async () => {
    const {dogInSystem} = this.props.navigation.state.params;
    const {twoDogs, onSecondDog} = this.props.rootStore;
    if (dogInSystem) {
      this.setState({isHaveCollar: false});
      //need to check id - if exist send user info.
    } else {
      //done registeration + create new dog id
      await sendSignupInfo({
        signupUserObject: this.props.navigation.state.params.signupUserObject,
        signupDogObject: Object.assign(
          this.props.navigation.state.params.signupDogObject,
        ),
      });
      // if twodogs -> navigate to second register
      if (twoDogs && !onSecondDog) {
        this.props.navigation.navigate('DogFirst', {nextDog: true});
      } else  {
        this.props.navigation.navigate('SignupFinish');
      }
    }
  };

  onChangeDogId = text => {
    const result = this.isNormalInteger(text);
    if (!result) this.setState({errorText: 'Enter only numbers'});
    else {
      this.setState({errorText: null, checkIdInServer: true, dogId: text});
    }
  };

  isNormalInteger = str => {
    return /^\+?([1-9]\d*)$/.test(str);
  };

  onPressDoneEnterId = async () => {
    if (this.state.checkIdInServer) {
      const isExist = await isDogIdExist({
        userId: this.props.rootStore.userId,
        token: this.props.rootStore.userToken,
        dogId: this.state.dogId,
      });
      if (isExist == 200) {
        // dog found in system by Id
        await sendNewUserInfo({
          signupUserObject: this.props.navigation.state.params,
          macId: null,
          token: this.props.rootStore.userToken,
          dogId: this.state.dogId
        });
        this.props.navigation.navigate('SignupFinish');
      }
      else {
        this.setState({errorText: `The dog doesn't exist in the system.`});
      }
    }
  };

  onPressSecondDog = async () => {
    const macId = this.state.mac_id;
    this.props.navigation.navigate('DogFirst', {nextDog: true});
    await sendSignupInfo({
      signupUserObject: this.props.navigation.state.params.signupUserObject,
      signupDogObject: Object.assign(
        this.props.navigation.state.params.signupDogObject,
        macId,
      ),
    });
  };

  render() {    
    const {twoDogs, onSecondDog} = this.props.rootStore;
    const dogName = this.props.navigation.state.params.signupDogObject ? this.props.navigation.state.params.signupDogObject.dogName : '';
    return (
      <BaseView>
        <Header title navigation={this.props.navigation} />
        <VerticalSpaceP height={0.05} />
        {this.state.isHaveCollar ? (
          <View style={{alignItems: 'center'}}>
            <ScanBigQuestionText>Scan dog collar QR code</ScanBigQuestionText>
            <VerticalSpaceP height={0.06} />
            <View style={styles.scanArea}>
              {!this.state.isScanned ? (
                <QRCodeScanner
                  onRead={this.onSuccess}
                  cameraStyle={styles.cameraContainer}
                  containerStyle={styles.container}
                />
              ) : (
                <View style={styles.completeView}>
                  <Icon name="check" size={35} color="green" />
                  <BigBoldText style={styles.completeText}>
                    {`${dogName==null ? '' : dogName} COLLAR`} 
                  </BigBoldText>
                  <BigBoldText style={styles.completeText}>
                    {`SCAN COMPLETED`} 
                  </BigBoldText>
                </View>
              )}
            </View>
          </View>
        ) : (
          <View>
            <ScanBigQuestionText>Enter dog Id</ScanBigQuestionText>
            <VerticalSpaceP height={0.05} />
            <View style={styles.scanArea}>
              <TextInputWithF
                placeholder={'Id in profile'}
                onChange={this.onChangeDogId}
              />
              <VerticalSpaceP height={0.02} />
              <View style={styles.errorMsgView}>
                <Text style={styles.errorText}>{this.state.errorText}</Text>
              </View>
              <VerticalSpaceP height={0.03} />
              <Image
              source={require('../../../images/dogId.png')}
              style={styles.image}
            />
            </View>
          </View>
        )}
        <Footer
          onSecondDog={onSecondDog}
          twoDogs={twoDogs}
          secondDogFunc={this.onPressSecondDog}
          isDone={this.state.isDone}
          doneFunc={this.onPressDone}
          noCollar={this.state.isHaveCollar}
          noCollarFunc={this.onPressNoCollar}
          checkIdInServer={this.state.checkIdInServer}
          onPressDoneEnterId={this.onPressDoneEnterId}
        />
      </BaseView>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #f2d2a9;
  align-items: center;
`;

const styles = StyleSheet.create({
  errorMsgView: {
    width: width*0.88,
    alignSelf: 'center',
  },
  image:{
    width: width * 0.6,
    height: height * 0.45,
  },
  errorText: {
    fontSize: 0.04 * width,
    color: '#b50029',
    alignSelf: 'center',
  },
  cameraContainer: {
    width: width * 0.6,
  },
  scanArea: {
    width: width * 0.6,
    height: height * 0.5,
  },
  completeText: {
    color: 'green',
  },
  completeView: {
    width: width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    backgroundColor: '#f6dcbb',
  },
});
