import {observable, action, flow} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

export class StoreUserSecondScreen {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    
      @observable isDatePickerVisible = false;
      @observable birthdate = null;

      @observable moreThenOneDog = false;

      @observable address = null;
      @observable radiusInMeters = 200;
      @observable feedMorning = -1;
      @observable feedNoon = -1;
      @observable feedEvening = -1;
      @observable hangouts = [false, false, false, false]


      @observable errorMsg = null;
      @observable loading = false;

      @observable signupUserObject = {
                                    hangouts: [false, false, false, false],
                                    userBirthdate: null,
                                    radiusInMeters: 200,
                                    feedMorning: -1,
                                    feedNoon: -1,
                                    feedEvening: -1,
                                    moreThenOneDog: false
                                }

    
      @action
      setDatePickerVisible(isVisible) {
        this.isDatePickerVisible = isVisible;
      }
      @action
      setBirthdate(userAge, dateString) {
        this.birthdate = userAge;
        this.signupUserObject.userBirthdate = dateString;

      }

      @action
      setRadiusInMeters(selection) {
        this.radiusInMeters = selection;
        this.signupUserObject.radiusInMeters = this.radiusInMeters;
      }

      @action
      setAddress({address} ) {
        this.address = address;
      }

      @action
      setFeedMorning(selection){
        this.feedMorning = selection;
        this.signupUserObject.feedMorning = this.feedMorning;
      }
      @action
      setFeedNoon(selection){
        this.feedNoon = selection;
        this.signupUserObject.feedNoon = this.feedNoon;
      }
      @action
      setFeedEvning(selection){
        this.feedEvening = selection;
        this.signupUserObject.feedEvening = this.feedEvening;
      }

      @action
      setHangouts(index, value){
        this.hangouts[index] = value;
        this.signupUserObject.hangouts[index] = this.hangouts[index];

      }
}

