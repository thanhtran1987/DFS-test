import { tileListActionType } from '../../Helper/Constant';

export const getTileList = (data: any) => {
  return { type: tileListActionType.REQUEST, payload: data };
};
export const loadTileList = (data: any) => {
  return fetch(process.env.API_URL + '/photos/').then(response => {
    return response.json();
  });
};
