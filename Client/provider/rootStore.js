import {observable, action, flow} from 'mobx';
import {getProfileInfo} from '../containers/profileScreen/store/routes'

class rootStore {

  @observable loading = false;
  @observable userName = null;
  @observable userToken = '';
  @observable userId = null;
  @observable userEmail;
  @observable userDogs = [];
  @observable selectedDog;
  @observable isRegistered = true;
  @observable twoDogs = false;
  @observable onSecondDog = false;

  @action
  setOnSecondDog(value){
    this.onSecondDog = value;
  }

  @action
  setIsRegistered(value){
    this.isRegistered = value;
  }

  @action
  setSelectedDog(dogObject) {
    this.selectedDog = dogObject;
  }

  @action
  setUserInfo(info) {
    this.userToken = info.token;
    this.userId = info.userId;
    this.userEmail = info.email;
  }

   @action
   setTwoDogs(value){
       this.twoDogs = value;
   }

   @action
   getProfile = flow(function*() {
     try {
           this.loading = true;
           const response = yield getProfileInfo(this.userId, this.userToken);
           if (response.status == 500) {
             this.errorMsg = 'No response from server';
           } else if (response.status == 501) {
             this.errorMsg = response;
           } else {
             this.loading = false;
             this.isRegistered = response.foundUser.is_registered;
             this.userName = response.foundUser.name;
           }
     } catch (e) {
       this.errorMsg = 'Network error'
       console.log('getProfile in rootStore catch', e);
     }
   });
}

export default new rootStore();
