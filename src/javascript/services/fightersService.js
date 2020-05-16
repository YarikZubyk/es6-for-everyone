import { callApi } from '../helpers/apiHelper';
import { fightersDetails } from '../helpers/mockData';

export async function getFighters() {
  try {
    const endpoint = 'fighters.json';
    const apiResult = await callApi(endpoint, 'GET');
    
    return apiResult;
  } catch (error) {
    throw error;
  }
}

export async function getFighterDetails(id) {
  return fightersDetails.find((it) => it._id === id);
  // endpoint - `details/fighter/${id}.json`;
}
