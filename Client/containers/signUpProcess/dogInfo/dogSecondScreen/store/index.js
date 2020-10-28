import {observable, action} from 'mobx';
import {findBreed} from '../../../../../components/breeds'
export class StoreDogSecondScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable breed = 1;
  @observable isMix = false;
  @observable gender = 2;
  @observable isSpayed = false;
  @observable birthdate = null;
  @observable isDatePickerVisible = false;
  @observable weight = 0;

  @observable errorMsg = null;
  @observable loading = false;

  @observable signupDogObject = {
    dogGender: 2,
    breed: '',
    isMix: false,
    isSpayed: false,
    dogBirthdate: null,
    weight: 0
  };

  @action
  resetObservables() {
    console.log('reset second dog  called');
    this.breed = 1;
    this.isMix = false;
    this.gender = 2;
    this.isSpayed = false;
    this.birthdate = null;
    this.isDatePickerVisible = false
    this.weight = 0;

    this.signupObject = {
    dogGender: 2,
    breed: '',
    isMix: false,
    isSpayed: false,
    dogBirthdate: null,
    weight: 0
    }
  }

  @action
  setBreed(breed) {
    const { breedSize , breedExercise } = findBreed(breed);
    this.breed = breed;
    this.signupDogObject.breed = breed;
    this.signupDogObject.breedSize = breedSize;
    this.signupDogObject.breedExercise = breedExercise;
  }

  @action
  setIsMix() {
    this.isMix = !this.isMix;
    this.signupDogObject.isMix = this.isMix;
  }

  @action
  setGender(gender) {
    this.gender = gender;
    this.signupDogObject.dogGender = gender;
  }

  @action
  setIsSpayed() {
    this.isSpayed = !this.isSpayed;
    this.signupDogObject.isSpayed = this.isSpayed;
  }

  @action
  setDatePickerVisible(isVisible) {
    this.isDatePickerVisible = isVisible;
  }
  @action
  setBirthdate(dogAge, dateString) {
    this.birthdate = dogAge;
    this.signupDogObject.dogBirthdate = dateString;
  }

    @action
    setWeight(text){
        this.weight = text;
        this.signupDogObject.weight = text;
    }
}
