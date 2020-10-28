import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import {  NavigationActions } from 'react-navigation';
import {StoreProfileScreen} from './store';
import {VerticalSpaceP} from '../../components/verticalSpace';
import {NoDogsBigQuestionText} from '../../containers/styles/fonts';
import {ProfileDetails} from './components/profileDetails';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
@inject('rootStore')
@observer
class Profile extends Component {
  constructor(props) {
    super(props);
    this.storeProfileScreen = new StoreProfileScreen(props.rootStore);
  }
  static navigationOptions = ({ navigation }) => {
   
    return {
      headerRight: (
        <TouchableOpacity
          style={styles.logOut}
          onPress={() => 
            Alert.alert(
              'Hi,',
              'Are you sure you want to logout?',
              [
                {
                  text: `I'm sure`,
                  onPress: () => {
                    AsyncStorage.clear();
                    navigation.navigate('Login');
                  },
                },
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
              ],
              {cancelable: false},
            )
          }>
          <Icon name="logout" size={25} color="black" />
        </TouchableOpacity>
      ),
    };
  };

  async componentDidMount() {
    await this.storeProfileScreen.getProfile();
  }

  signupPressed = () => {
    this.props.navigation.navigate(
      'Explore',
      {},
      NavigationActions.navigate({
        routeName: 'Signup',
      }),
    );
  };

  render() {
    const {isRegistered} = this.props.rootStore;
    return (
      <MobxProvider storeProfileScreen={this.storeProfileScreen}>
        {isRegistered ? (
          <ProfileDetails />
        ) : (
          <NotRegistered func={this.signupPressed} />
        )}
      </MobxProvider>
    );
  }
}
export default Profile;

const NotRegistered = props => {
  console.log('props', props);
  return (
    <View style={styles.center}>
      <VerticalSpaceP height={0.1} />
      <Image
        source={require('../../images/3dogs.png')}
        style={styles.dogsImage}
      />
      <VerticalSpaceP height={0.04} />
      <View style={styles.textView}>
        <NoDogsBigQuestionText>
          Please complete the registration so you can enjoy the app features.
        </NoDogsBigQuestionText>
        <VerticalSpaceP height={0.04} />
        <Button
          style={{position: 'absolute', top: 0}}
          color="#e5c68b"
          onPress={props.func}
          title="Press here"
        />
      </View>
    </View>
  );
};
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
  logOut: {
    marginRight: width *0.035,
  }
});


