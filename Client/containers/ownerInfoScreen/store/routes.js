import {consts} from '../../../consts';
export async function getOwnersDogs(data) {
  try {
    const response = await fetch(`${consts.serverUrl}/getOwnerDogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({dogs: data}),
    });
    return await response.json();
  } catch (err) {
    console.log(`cant get owners data error: ${err}`);
    return 0;
  }
}
