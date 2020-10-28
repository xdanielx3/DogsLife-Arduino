import {observable, action, flow} from 'mobx';

export class StoreDogThirdScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable energyLevel = 1;
  @observable getAlongGender = 3;
  @observable getAlongSpayed = 3;
  @observable getAlongSize = 3;
  @observable player = true;
  @observable parkPre = 1;

  @observable errorMsg = null;
  @observable loading = false;

  @observable signupObject = {
    energyLevel: 1,
    getAlongGender: 3,
    getAlongSpayed: 3,
    getAlongSize: 3,
    player: true,
    parkPre: 1,
  };

  @action
  resetObservables() {
    this.energyLevel = 1;
    this.getAlongGender = 3;
    this.getAlongSpayed = 3;
    this.getAlongSize = 3;
    this.player = true;
    this.parkPre = 1;
    this.errorMsg = null;

    this.signupObject = {
      energyLevel: 1,
      getAlongGender: 3,
      getAlongSpayed: 3,
      getAlongSize: 3,
      player: true,
      parkPre: 1,
    };
  }
  @action
  setEnergyLevel(selection) {
    this.energyLevel = selection;
    this.signupObject.energyLevel = this.selection;
  }

  @action
  setGetAlongGender(selection) {
    this.getAlongGender = selection;
    this.signupObject.getAlongGender = this.getAlongGender;
  }
  @action
  setGetAlongSpayed(selection) {
    this.getAlongSpayed = selection;
    this.signupObject.getAlongSpayed = this.getAlongSpayed;
  }
  @action
  setGetAlongSize(selection) {
    this.getAlongSize = selection;
    this.signupObject.getAlongSize = this.getAlongSize;
  }

  @action
  setPlayer() {
    this.player = !this.player;
    this.signupObject.player = this.player;
  }
  @action
  setParkPreference(value) {
    this.parkPre = value;
    this.signupObject.parkPre = this.parkPre;
  }
}
