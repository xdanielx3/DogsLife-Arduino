import {observable, action, flow} from 'mobx';
import { getOwnersData } from './routes'

export class StoreDogInfoScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable ownersArray = [];
  @observable matchId = null;
  
  @observable loading = false;

  @action
  setOwners(owners){
      this.ownersArray = [...owners];
  }

  @action
  getOwnersData = flow(function*(ownersIds) {
    try {
      this.loading = true;
        const response = yield getOwnersData(ownersIds);
        if (response == 0)
        this.errorMsg = 'Sorry, we encountered a problem. Try again.';
      if (response) {
        this.ownersArray = response;
        this.loading = false;
      }
    } catch (e) {
      this.errorMsg = 'Network error'
      console.log('getOwnersData catch', e);
    }
  });
}
