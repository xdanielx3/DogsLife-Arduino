import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {BigQuestionText, MedBoldText} from '../../../styles/fonts';
import styled from 'styled-components/native';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {UploadImageArea} from './components/uploadImageArea';
import {TextInputWithF} from '../../../../components/textInputWithF';
import {NumOfDogsPicker} from '../components/pickers';
import {Footer} from '../../components/footer';
import {StoreUserFirstScreen} from './store/index';

const width = Dimensions.get('window').width;

@inject('rootStore')
@observer
export class UserFirstScreen extends Component {
  constructor(props) {
    super(props);
    this.storeUserFirstScreen = new StoreUserFirstScreen(props.rootStore);
  }

  componentDidMount() {
    DeviceInfo.getMacAddress().then(mac => {
      this.storeUserFirstScreen.setUserMacId(mac);
    });
  }

  onChangeNameText = text => {
    this.storeUserFirstScreen.setName(text);
  };

  render() {
    const {name, signupUserObject} = this.storeUserFirstScreen;
    return (
      <MobxProvider storeUserFirstScreen={this.storeUserFirstScreen}>
        <BaseView>
          <Header title navigation={this.props.navigation} />
          <VerticalSpaceP height={0.05} />
          <BigQuestionText>What is your name?</BigQuestionText>
          <VerticalSpaceP height={0.06} />
          <UploadImageArea />
          <VerticalSpaceP height={0.08} />
          <TextInputWithF
            placeholder={'Dani'}
            value={name}
            onChange={this.onChangeNameText}
          />
          <VerticalSpaceP height={0.032} />
          <View
            style={{
              width: width * 0.88,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <MedBoldText>How many dogs do you have?</MedBoldText>
            <NumOfDogsPicker store={this.storeUserFirstScreen} />
          </View>
          <Footer
            screenNumber={1}
            navigation={this.props.navigation}
            next={'UserSecond'}
            params={signupUserObject}
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
