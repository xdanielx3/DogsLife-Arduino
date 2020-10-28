import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View, Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {MedQuestionText} from '../../../styles/fonts';
import {Footer} from '../../components/footer';
import {
  Sport,
  Handout,
  Gaming,
  Learning,
  Nature,
  Music,
  Art,
  Games,
  Cooking,
} from './components/hobbies';
import {StoreUserForthScreen} from './store';

const width = Dimensions.get('window').width;

@inject('rootStore')
@observer
export class UserForthScreen extends Component {
  constructor(props) {
    super(props);
    this.storeUserForthScreen = new StoreUserForthScreen(props.rootStore);
  }
  render() {
    const {signupObject} = this.storeUserForthScreen;
    return (
      <MobxProvider storeUserForthScreen={this.storeUserForthScreen}>
        <BaseView>
          <Header navigation={this.props.navigation} />
          <VerticalSpaceP height={0.03} />
          <MedQuestionText>What are your hobbies ?</MedQuestionText>
          <VerticalSpaceP height={0.03} />
          <View style={styles.row}>
            <Sport store={this.storeUserForthScreen} />
            <Handout store={this.storeUserForthScreen} />
            <Gaming store={this.storeUserForthScreen} />
          </View>
          <VerticalSpaceP height={0.02} />
          <View style={styles.row}>
            <Learning store={this.storeUserForthScreen} />
            <Nature store={this.storeUserForthScreen} />
            <Music store={this.storeUserForthScreen} />
          </View>
          <VerticalSpaceP height={0.02} />
          <View style={styles.row}>
            <Art store={this.storeUserForthScreen} />
            <Games store={this.storeUserForthScreen} />
            <Cooking store={this.storeUserForthScreen} />
          </View>
          <Footer
            screenNumber={'4'}
            navigation={this.props.navigation}
            next={'DogFirst'}
            params={{...this.props.navigation.state.params, ...signupObject, dogInSystem:true}}
            dogInSystem
          />
        </BaseView>
      </MobxProvider>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #b0d6d5;
  align-items: center;
`;
