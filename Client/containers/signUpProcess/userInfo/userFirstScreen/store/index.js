import {observable, action, flow} from 'mobx';

export class StoreUserFirstScreen {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    
      @observable name;
      @observable avatar = null;
      @observable gender = true;
      @observable numOfDogs = null;
      @observable errorMsg = null;
      @observable loading = false;

      @observable signupUserObject = {
                                    userGender: true,
                                    userName: null,
                                    userAvatar: null,
                                    userId: this.rootStore.userId, // from rootStore
                                    // userId: this.rootStore.userId
                                    deciveMacId: null,
                                }
    
      @action
      setNumOfDogs(num){
        if(num == 2) this.rootStore.setTwoDogs(true);
        if(num == 3) this.rootStore.setTwoDogs(false);
        this.numOfDogs = num;
      }                         
      @action
      setUserMacId(mac){
        this.signupUserObject.deciveMacId = mac;
      }

      @action
      setName(name) {
        this.name = name;
        this.signupUserObject.userName = name;
      }

      @action
      setGender(gender) { 
        this.gender = gender;
        this.signupUserObject.userGender = gender;
      }
    
      @action
      setAvatar(userImage) {
        this.avatar = userImage;
        this.signupUserObject.userAvatar = userImage;
      }
}

