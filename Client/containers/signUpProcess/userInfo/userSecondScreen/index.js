import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {MedBoldText} from '../../../styles/fonts';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {
  FeedMorning,
  FeedEvening,
  FeedNoon,
} from '../components/pickers';
import {DatePicker} from './components/datePicker';
import {CheckBoxes} from './components/checkBoxes';
import {Footer} from '../../components/footer';
import {Question} from '../../components/qustion';
import {StoreUserSecondScreen} from './store';
import {Slider} from './components/slider';
import {WhiteButton} from '../../components/whiteButton'

const width = Dimensions.get('window').width;

@inject('rootStore')
@observer
export class UserSecondScreen extends Component {
  constructor(props) {
    super(props);
    this.storeUserSecondScreen = new StoreUserSecondScreen(props.rootStore);
    this.handleUserAddress = this.handleUserAddress.bind(this)
    this.state = {
      value: 50,
    };
  }
  componentDidMount() {
    this._onFocusListener = this.props.navigation.addListener('didFocus', () => {
      this.handleUserAddress()
    })
  }

  handleUserAddress() {
    this.storeUserSecondScreen.setAddress(this.props.navigation.state.params)
  }



  render() {
    const {signupUserObject, address} = this.storeUserSecondScreen;
    return (
      <MobxProvider storeUserSecondScreen={this.storeUserSecondScreen}>
        <BaseView>
          <Header navigation={this.props.navigation} />
          <VerticalSpaceP height={0.05} />
          <View
            style={{
              width: width * 0.88,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <MedBoldText>How old are you?</MedBoldText>
            <DatePicker store={this.storeUserSecondScreen} />
          </View>
          <VerticalSpaceP height={0.02} />
          <Question text={`What is your address?`} />
          <VerticalSpaceP height={0.02} />

          <WhiteButton
          containerStyle={{justifyContent: 'center'}}
            text={address ? address : 'Select Location'}
            onPress={() => this.props.navigation.navigate('SelectLocation')}
          />
          <VerticalSpaceP height={0.02} />
          <Slider />
          <VerticalSpaceP height={0.02} />
          <Question text={`What is your feeding schedule?`} />
          <VerticalSpaceP height={0.02} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '88%',
            }}>
            <FeedMorning store={this.storeUserSecondScreen} />
            <FeedNoon store={this.storeUserSecondScreen} />
            <FeedEvening store={this.storeUserSecondScreen} />
          </View>
          <VerticalSpaceP height={0.02} />
          <Question
            text={`What are your favorite hangout places with your dog?`}
          />
          <VerticalSpaceP height={0.02} />
          <CheckBoxes store={this.storeUserSecondScreen} />
          <Footer
            screenNumber={2}
            navigation={this.props.navigation}
            next={'UserThird'}
            params={{
              ...this.props.navigation.state.params,
              ...signupUserObject,
            }}
          />
        </BaseView>
      </MobxProvider>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #b0d6d5;
  align-items: center;
`;
