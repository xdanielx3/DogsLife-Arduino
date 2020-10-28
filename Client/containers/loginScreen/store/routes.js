import { consts } from '../../../consts';
export async function loginRequest(data) {    
      const response = await fetch(`${consts.serverUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });    
    return await response.json();
  }
