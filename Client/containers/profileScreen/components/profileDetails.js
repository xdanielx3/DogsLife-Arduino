import React, {PureComponent} from 'react';
import {inject, observer} from 'mobx-react';
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import styled from 'styled-components/native';

import UserInfo from './userInfo/UserInfo';
import {DogInfo} from './dogInfo/dogInfo';
import {LoadingLady} from '../../../components/LoadingLady';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

@inject('storeProfileScreen')
@observer
export class ProfileDetails extends PureComponent {
    render() {
        const {loading} = this.props.storeProfileScreen;
        return(
            loading ? (
                <LoadingLady />
              ) : (
                <BaseView>
                  <UserInfo />
                  <ScrollView style={styles.flexView}>
                    <DogInfo />
                  </ScrollView>
                </BaseView>
              )
        )
    }
}
const styles = StyleSheet.create({
    flexView: {
      width: '100%',
      flex: 1,
    },
    center: {
      alignItems: 'center',
    },
    dogsImage: {
      width: width * 0.7,
      height: height * 0.2,
      opacity: 0.7,
    },
    textView: {
      width: '85%',
      textAlign: 'center',
    },
  });

const BaseView = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;