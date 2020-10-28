import { consts } from '../../../consts';
export async function sendSignupInfo(data) {    
      const response = await fetch(`${consts.serverUrl}/addSignupObject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });    
    return ;
  }

  export async function sendNewUserInfo(data) {    
      const response = await fetch(`${consts.serverUrl}/addNewUserToExistDog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });    
    return ;
  }

  export async function isDogIdExist(data) {    
    const response = await fetch(`${consts.serverUrl}/isDogIdExist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });    
  return response.status;
}
