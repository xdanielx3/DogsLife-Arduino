import React, {PureComponent} from 'react';
import {inject, observer} from 'mobx-react';
import styles from '../../../styles/ProfileStyle';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import NameAndDetails from './components/NameAndDetails';
import {VerticalSpace} from '../../../../components/verticalSpace';
import {DogsList} from '../dogInfo/components/dogsList';

@inject('storeProfileScreen')
@observer
class UserInfo extends PureComponent {
  render() {
    const {userName, userAvatar} = this.props.storeProfileScreen;
    const {userEmail} = this.props.storeProfileScreen.rootStore;
    return (
      <View style={styles.userInfoContainer}>
        <TouchableOpacity style={styles.userInfo}>
          <NameAndDetails email={userEmail} name={userName} />
          <View>
            <Image
              source={{
                uri: userAvatar,
              }}
              style={styles.userImage}
            />
          </View>
        </TouchableOpacity>
        <VerticalSpace height={15} />
        <DogsList />
        <VerticalSpace height={5} />
      </View>
    );
  }
}

export default UserInfo;
