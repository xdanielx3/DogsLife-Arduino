import {observable, action, flow} from 'mobx';
import {registerRequest} from './routes';
import {validateEmail} from '../../loginScreen/store/logic/validateEmail';

export class StoreRegisterScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable loading = false;
  @observable email;
  @observable password;
  @observable errorMsg = null;

  @action
  setEmail(email) {
    this.email = email;
  }

  @action
  setPassword(password) {
    this.password = password;
  }

  @action
  joinPressed = flow(function*(navigation) {
    let registerData = {username: this.email, password: this.password};
    try {
      if (!this.email || !this.password) {
        this.errorMsg = 'Empty Fields';
      } else if (this.email && validateEmail(this.email)) {
        if (this.password && this.password.length >= 8) {
          this.loading = true;
          const response = yield registerRequest(registerData);
          if (!response) {
            this.errorMsg = 'No response from server';
          } else if (response.err) {
            this.errorMsg = response.err;
          } else {
            this.loading = false;
            navigation.navigate('Login');
          }
        } else {
          this.errorMsg = 'Password must be at least 8 characters long';
        }
      } else {
        this.errorMsg = 'Enter valid Email';
      }
    } catch (e) {
      console.log('catch', e);
    }
  });
}
