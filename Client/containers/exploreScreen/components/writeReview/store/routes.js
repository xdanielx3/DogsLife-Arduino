import { consts } from '../../../../../consts';
export async function sendReview(data) {    
    const response = await fetch(`${consts.serverUrl}/addReview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });    
    return await response.json();
  }
