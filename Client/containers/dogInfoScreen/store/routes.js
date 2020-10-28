import {consts} from '../../../consts';
export async function getOwnersData(data) {
  try {
    const response = await fetch(`${consts.serverUrl}/getDogOwners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ownersIds: data}),
    });
    return await response.json();
  } catch (err) {
    console.log(`cant get owners data error: ${err}`);
    return 0;
  }
}
