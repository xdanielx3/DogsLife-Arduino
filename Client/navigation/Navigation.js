import React from 'react';
import {Image, TouchableOpacity, Dimensions, Alert} from 'react-native';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import ExploreScreen from '../containers/exploreScreen/Explore';
import MatchesScreen from '../containers/matchesScreen/Matches';
import ProfileScreen from '../containers/profileScreen/Profile';
import DogInfoScreen from '../containers/dogInfoScreen/dogProfile';
import OwnerInfoScreen from '../containers/ownerInfoScreen';

import {LoginScreen} from '../containers/loginScreen/LoginScreen';
import {RegisterScreen} from '../containers/registerScreen/RegisterScreen';
import {SignupEntry} from '../containers/signUpProcess/entryScreen/entryScreen';
import {UserFirstScreen} from '../containers/signUpProcess/userInfo/userFirstScreen';
import {UserSecondScreen} from '../containers/signUpProcess/userInfo/userSecondScreen';
import {UserThirdScreen} from '../containers/signUpProcess/userInfo/userThirdScreen';
import {UserForthScreen} from '../containers/signUpProcess/userInfo/userForthScreen';
import {DogFirstScreen} from '../containers/signUpProcess/dogInfo/dogFirstScreen';
import {DogSecondScreen} from '../containers/signUpProcess/dogInfo/dogSecondScreen';
import {DogThirdScreen} from '../containers/signUpProcess/dogInfo/dogThirdScreen';
import {ScanCollarScreen} from '../containers/signUpProcess/scanQr';
import {WriteReview} from '../containers/exploreScreen/components/writeReview/writeReview';
import SelectLocationScreen from '../containers/signUpProcess/userInfo/addressPickerScreen';
import {SignupFinishScreen} from '../containers/signUpProcess/finishScreen';
import {AuthLoadingScreen} from '../containers/authLoadingScreen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const matchScreen = createStackNavigator({
  Matches: {
    screen: MatchesScreen,
    navigationOptions: {
      headerTitle: 'Matches for you',
      headerLeft: null,
      headerTitleStyle: {
        flex: 1,
        fontSize: width * 0.061,
        color: 'black',
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#e5c68b',
        height: height * 0.08,
        elevation: 1,
      },
    },
  },
});

const exploreScreen = createStackNavigator(
  {
    Explore: {
      screen: ExploreScreen,
    },
    Review: {
      screen: WriteReview,
    },
    Signup: {
      screen: SignupEntry,
    },
    UserFirst: {
      screen: UserFirstScreen,
    },
    UserSecond: {
      screen: UserSecondScreen,
    },
    UserThird: {
      screen: UserThirdScreen,
    },
    UserForth: {
      screen: UserForthScreen,
    },
    DogFirst: {
      screen: DogFirstScreen,
    },
    DogSecond: {
      screen: DogSecondScreen,
    },
    DogThird: {
      screen: DogThirdScreen,
    },
    ScanCollar: {
      screen: ScanCollarScreen,
    },
    SelectLocation: {
      screen: SelectLocationScreen,
    },
    SignupFinish: {
      screen: SignupFinishScreen,
    },
    DogInfo: {
      screen: DogInfoScreen,
    },
    OwnerInfo: {
      screen: OwnerInfoScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: true,
    },
    initialRouteName: 'Explore',
  },
);

exploreScreen.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const profileScreen = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile',
      headerLeft: null,
      headerTitleStyle: {
        flex: 1,
        fontSize: width * 0.061,
        color: 'black',
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#FFF',
        height: height * 0.08,
        elevation: 1,
      },
    },
  },
});

const AppStack = createBottomTabNavigator(
  {
    Match: {
      screen: matchScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../images/black_heart.png')
                : require('../images/grey_heart.png')
            }
            style={{height: 30, aspectRatio: 1}}
          />
        ),
      },
    },
    Explore: {
      screen: exploreScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../images/black_map.png')
                : require('../images/grey_map.png')
            }
            style={{height: 30, aspectRatio: 1}}
          />
        ),
      },
    },
    Profile: {
      screen: profileScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../images/black_user.png')
                : require('../images/grey_user.png')
            }
            style={{height: 30, aspectRatio: 1}}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Explore',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#FFF',
        borderTopWidth: 0,
        height: 50,
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: true,
    },
    initialRouteName: 'Login',
  },
);

const App = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      AppScreens: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default App;
