import {observable, action} from 'mobx';

export class StoreUserForthScreen {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    

      @observable hobbies = [false, false, false, false, false, false, false, false, false]


      @observable errorMsg = null;
      @observable loading = false;

      @observable signupObject = {
                                    hobbies: [false, false, false, false, false, false, false, false, false],
                                  }

      @action
      setHobbies(index, value){
        this.hobbies[index] = value;
        this.signupObject.hobbies[index] = this.hobbies[index];
      }
}

