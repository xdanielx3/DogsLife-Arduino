import {observable, action, flow} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import {loginRequest} from './routes';
import {validateEmail} from './logic/validateEmail';

export class StoreLoginScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable email;
  @observable password;
  @observable errorMsg = null;
  @observable loading = false;

  @action
  setEmail(email) {
    this.email = email;
  }

  @action
  setPassword(password) {
    this.password = password;
  }

  @action
  signInPressed = flow(function*(navigation) {
    let loginData = {username: this.email, password: this.password};
    try {
      if (!this.email || !this.password) {
        this.errorMsg = 'Empty Fields.';
      } else {
        if (!validateEmail(this.email)) {
          this.errorMsg = 'Enter Valid Email.';
        } else {
          this.loading = true;
          const response = yield loginRequest(loginData);
          if (!response) {
            this.errorMsg = 'No response from server';
          } else if (response.err) {
            this.errorMsg = response.err;
          } else {
            navigation.navigate('AppScreens');
            this.loading = false;
            const userInfo = {
              email: this.email,
              userId: response.profile.id,
              password: this.password,
              token: response.token,
            };
            yield AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            this.rootStore.setUserInfo(userInfo);
          }
        }
      }
    } catch (e) {
      this.errorMsg = 'Network error'
      console.log('catch', e);
    }
  });
}
