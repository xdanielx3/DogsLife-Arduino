
import { consts } from '../../../consts';
export async function registerRequest(data) {    
    const response = await fetch(`${consts.serverUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });    
    return await response.json();
  }
