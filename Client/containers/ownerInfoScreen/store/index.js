import {observable, action, flow, computed, autorun} from 'mobx';
import {getOwnersDogs} from './routes';

export class StoreOwnerInfoScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable dogsArray = [];
  @observable matchId = 103; // need to be change
  @observable name = null;
  @observable age = null;
  @observable avatar = null;
  @observable hobbies = null;
  @observable hangouts = null;
  @observable hobbiesString = null;
  @observable hangoutsString = null;

  @observable loading = false;

  @action
  setDogs(dogs) {
    this.dogsArray = [...dogs];
  }

  @action
  setOwnerDetails(owner) {
    this.name = owner.name;
    this.date = owner.age;
    this.avatar = owner.avatar;
    this.hangouts = owner.hangouts;
    this.hobbies = owner.hobbies;
    autorun(() => {
      this.age = this.computedAge;
      this.hangoutsString = this.computedHangouts;
      this.hobbiesString = this.computedHobbies;
    });
  }

  @computed get computedAge() {
    let yearsT =
      (new Date() - new Date(this.date)) / (1000 * 60 * 60 * 24 * 365.25);
    let years = yearsT < 0 ? null : `${Math.floor(yearsT)} years old`;
    return years || null;
  }
  @computed get computedHobbies() {
    let string = ``;
    if (this.hobbies[0]) string = string + `Sport`;
    if (this.hobbies[1]) string = string + `, Hangout`;
    if (this.hobbies[2]) string = string + `, Gaming`;
    if (this.hobbies[3]) string = string + `, Learning`;
    if (this.hobbies[4]) string = string + `, Nature`;
    if (this.hobbies[5]) string = string + `, Music`;
    if (this.hobbies[6]) string = string + `, Art`;
    if (this.hobbies[7]) string = string + `, Games`;
    if (this.hobbies[8]) string = string + `, Cooking`;
    if (string[0] == ',') string = this.replaceAt(string, 0, '');
    if (string[string.length - 1] == ',')
      string = this.replaceAt(string, string.length - 1, '');
    if (string.length > 1) string = string + `.`;
    if (string.length == 0) string = 'None';
    return string;
  }

  @computed get computedHangouts() {
    let string = ``;
    if (this.hangouts[0]) string = string + `Beach`;
    if (this.hangouts[1]) string = string + `, Hiking`;
    if (this.hangouts[2]) string = string + `, Parks`;
    if (this.hangouts[3]) string = string + `, Visit friend`;
    if (string[0] == ',') string = this.replaceAt(string, 0, '');
    if (string[string.length - 1] == ',')
      string = this.replaceAt(string, string.length - 1, '');
    if (string.length > 1) string = string + `.`;
    if (string.length == 0) string = 'None';
    return string;
  }

  @action
  replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

  @action
  getOwnerDogs = flow(function*(dogsIds) {
    try {
      this.loading = true;
      const response = yield getOwnersDogs(dogsIds);
      if (response == 0)
        this.errorMsg = 'Sorry, we encountered a problem. Try again.';
      if (response) {
        this.dogsArray = response;
        this.loading = false;
      }
    } catch (e) {
      this.errorMsg = 'Network error';
      console.log('getOwnerDogs catch', e);
    }
  });
}
