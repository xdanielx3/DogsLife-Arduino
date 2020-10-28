import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Title } from '../entryScreen/components/title';
import {MedQuestionTextWide} from '../../../containers/styles/fonts'
import { VerticalSpaceP } from '../../../components/verticalSpace';
import { Footer } from '../components/footer';

@inject('rootStore')
@observer
export class SignupFinishScreen extends Component {

    finishRegistration = () => {
        this.props.rootStore.setIsRegistered(true);
        this.props.navigation.navigate('Explore');
    }

  render() {
    return (
        <BaseView>
            <VerticalSpaceP height={0.05} />
            <Title />
            <VerticalSpaceP height={0.06} />
            <View style={{ paddingVertical: 20, width: '95%', alignItems: 'center', backgroundColor: '#f5e9d1', borderRadius: 15}}>
            <Icon name="check" size={55} color="black" />
            <VerticalSpaceP height={0.015} />
            <MedQuestionTextWide>You have completed the registration process, enjoy the app.</MedQuestionTextWide>
            </View>
            <VerticalSpaceP height={0.03} />
            <Footer removeBar text={'Great !'} onPress={this.finishRegistration}/>
        </BaseView>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #e5c68b;
  align-items: center;
`;
