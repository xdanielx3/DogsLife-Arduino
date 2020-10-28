import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View, Dimensions} from 'react-native';
import {MedBoldText} from '../../../styles/fonts';
import styled from 'styled-components/native';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {TextInputWithF} from '../../../../components/textInputWithF';
import {Footer} from '../../components/footer';
import {Question} from '../../components/qustion';
import {Gender} from './components/gender';
import {Breed} from './components/breed';
import {DatePicker} from '../../userInfo/userSecondScreen/components/datePicker';
import {StoreDogSecondScreen} from './store';

const width = Dimensions.get('window').width;

@inject('rootStore')
@observer
export class DogSecondScreen extends Component {
  constructor(props) {
    super(props);
    this.storeDogSecondScreen = new StoreDogSecondScreen(props.rootStore);
  }

  componentDidMount(){
    this._onFocusListener = this.props.navigation.addListener('didFocus', () => {
      const { twoDogs } = this.props.rootStore;
      console.log("DogFirstScreen -> componentDidMount -> twoDogs", twoDogs)
        if(twoDogs){
          this.storeDogSecondScreen.resetObservables();
        }
    })
  }

  onChangeNameText = text => {

    this.storeDogSecondScreen.setWeight(text);
  };

  render() {
    const name = this.props.navigation.state.params.dogName ? this.props.navigation.state.params.dogName: 'your dog' ;
    const { signupDogObject, weight } = this.storeDogSecondScreen;
    return (
      <MobxProvider storeDogSecondScreen={this.storeDogSecondScreen}>
        <BaseView>
          <Header navigation={this.props.navigation} />
          <VerticalSpaceP height={0.09} />
          <Question text={`What is ${name} breed?`} />
          <Breed />
          <VerticalSpaceP height={0.04} />
          <Gender />
          <VerticalSpaceP height={0.07} />
          <View
            style={{
              width: width * 0.88,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <MedBoldText>How old is {name}?</MedBoldText>
            <DatePicker store={this.storeDogSecondScreen}/>
          </View>
          <VerticalSpaceP height={0.07} />
          <Question text={`What is ${name} weight?  kg`} />
          <VerticalSpaceP height={0.02} />
          <TextInputWithF placeholder={'2'} onChange={this.onChangeNameText} value={String(weight)} />
          <Footer
            screenNumber={6}
            navigation={this.props.navigation}
            next={'DogThird'}
            params={{signupUserObject: this.props.navigation.state.params.signupUserObject , signupDogObject: Object.assign(this.props.navigation.state.params.signupDogObject, signupDogObject)}}

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
