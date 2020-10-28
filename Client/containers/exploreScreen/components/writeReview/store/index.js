import {observable, action, flow} from 'mobx';
import { sendReview } from './routes'

export class StoreWriteReviewScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable starCountCleanliness = 3.5;
  @observable starCountFacilities = 3.5;
  @observable text;
  @observable userId = this.rootStore.userId;
  @observable author = this.rootStore.userName;

  @observable errorMsg = null;
  @observable loading = false;


  @action
  setCleanliness(value) {
    this.starCountCleanliness = value;
  }

  @action
  setFacilities(value) {
    this.starCountFacilities = value;
  }

  @action
  setReviewText(text){
      this.text = text;
  }

  @action
  sendReviewPressed = flow(function*(gardenId) {
    let reviewData = {gardenId: gardenId, text:this.text, starCountCleanliness: this.starCountCleanliness, starCountFacilities: this.starCountFacilities, author: this.author, userId: this.userId};
    try {
        const response = yield sendReview(reviewData);
    } catch (e) {
      this.errorMsg = 'Network error'
      console.log('catch', e);
    }
  });
}
