import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View} from 'react-native';
import {MedQuestionTextWide} from '../../../styles/fonts';
import styled from 'styled-components/native';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {UploadImageArea} from './components/uploadImageArea';
import {TextInputWithF} from '../../../../components/textInputWithF';
import {Footer} from '../../components/footer';
import {Question} from '../../components/qustion';
import {StoreDogFirstScreen} from './store';

@inject('rootStore')
@observer
export class DogFirstScreen extends Component {
  constructor(props) {
    super(props);
    this.storeDogFirstScreen = new StoreDogFirstScreen(props.rootStore);
  }
  componentDidMount(){
    this._onFocusListener = this.props.navigation.addListener('didFocus', () => {
      console.log(this.props.navigation.state.params);
      const { nextDog } = this.props.navigation.state.params;
      console.log("DogFirstScreen -> componentDidMount -> nextDog", nextDog)
        if(nextDog){
          this.storeDogFirstScreen.resetObservables();
          this.props.rootStore.setOnSecondDog(true);
        }
        const {twoDogs, onSecondDog} = this.props.rootStore;
        console.log("DogFirstScreen -> componentDidMount -> twoDogs, onSecondDog", twoDogs, onSecondDog)
    })
  }

  onChangeNameText = text => {
    this.storeDogFirstScreen.setName(text);
  };
  onChangeDescriptionText = text => {
    this.storeDogFirstScreen.setDescription(text);
  };

  render() {
    const {name, signupObject, description, avatar} = this.storeDogFirstScreen;
    const {onSecondDog} = this.props.rootStore;
    const text = name ? name : 'your dog'
    return (
      <MobxProvider storeDogFirstScreen={this.storeDogFirstScreen}>
        <BaseView>
          <Header onSecondDog={onSecondDog} title navigation={this.props.navigation} />
          <VerticalSpaceP height={0.05} />
          <MedQuestionTextWide>What is your dog name?</MedQuestionTextWide>
          <VerticalSpaceP height={0.05} />
          <UploadImageArea />
          <VerticalSpaceP height={0.03} />
          <TextInputWithF
            placeholder={'Bambi'}
            onChange={this.onChangeNameText}
            value={name}
          />
          <VerticalSpaceP height={0.01} />
          <Question text={`Tell us about ${text}.`} />
          <TextInputWithF
            bigger={2}
            placeholder={'He is bouncy, fast and cute.'}
            onChange={this.onChangeDescriptionText}
            value={description}
          />
          <Footer
            screenNumber={5}
            navigation={this.props.navigation}
            next={'DogSecond'}
            params={{signupUserObject: this.props.navigation.state.params, signupDogObject: signupObject}}
          />
        </BaseView>
      </MobxProvider>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #f2d2a9;
  align-items: center;
`;
