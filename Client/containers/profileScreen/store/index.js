import {observable, action, flow} from 'mobx';
import {getProfileInfo} from './routes';

export class StoreProfileScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable dogId = null;
  @observable name = null;
  @observable description = null;
  @observable breed = null;
  @observable personality = [];
  @observable dateOfBirth = null;
  @observable image = null;
  @observable collar = null;

  @observable userName;
  @observable visitedGardens = [];
  @observable userAvatar;
  @observable userDogs = [];
  @observable selectedDog;

  @observable loading = false;

  @action
  setSelectedDog(dogObject) {
    if (dogObject) {
      this.selectedDog = dogObject;
      this.name = dogObject.name;
      this.dogId = dogObject.id;
      this.description = dogObject.description;
      this.breed = dogObject.physical_params.breed;
      this.image = dogObject.avatar;
    }
  }

  @action
  setDogName(text) {
    this.name = text;
  }

  @action
  setDogDescription(text) {
    this.description = text;
  }

  @action
  buildDogArray(userDogsFromServer) {
    if (userDogsFromServer) {
      this.userDogs = userDogsFromServer;
      this.setSelectedDog(userDogsFromServer[0]);
    }
  }

  @action
  buildUserProfile(user) {
    this.userName = user.name;
    this.visitedGardens = user.visitedGardens;
    this.userAvatar = user.avatar;
  }

  @action
  getProfile = flow(function*() {
    try {
      this.loading = true;
      const response = yield getProfileInfo(this.rootStore.userId, this.rootStore.userToken);
      if (response.status == 500) {
        this.errorMsg = 'No response from server';
      } else if (response.status == 501) {
        this.errorMsg = response;
      } else {
        this.loading = false;
        this.buildDogArray(response.userDogs);
        this.buildUserProfile(response.foundUser);
      }
    } catch (e) {
      this.errorMsg = 'Network error';
      console.log('getProfile catch', e);
    }
  });
}
