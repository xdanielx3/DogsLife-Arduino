import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {MedQuestionText} from '../../../styles/fonts'
import {Footer} from '../../components/footer'
import { WalkMorning} from './components/walkMorning'
import {WalkMidday} from './components/walkMidday'
import{WalkAfternoon} from './components/walkAfternoon'
import{WalkEvening} from './components/walkEvening'
import {StoreUserThirdScreen} from './store'

@inject('rootStore')
@observer
export class UserThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.storeUserThirdScreen = new StoreUserThirdScreen(props.rootStore);
  }

  onPressNext = () => {
    this.storeUserThirdScreen.buildSignupObject(this.props.navigation);
  }

  render() {
    return (
        <MobxProvider storeUserThirdScreen={this.storeUserThirdScreen}>
      <BaseView>
        <Header navigation={this.props.navigation} />
        <VerticalSpaceP height={0.05} />
        <MedQuestionText>What is your dog walk-schedule?</MedQuestionText>
        <WalkMorning />
        <WalkMidday />
        <WalkAfternoon />
        <WalkEvening />
        <Footer onPress={this.onPressNext} screenNumber={'3'} />
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
