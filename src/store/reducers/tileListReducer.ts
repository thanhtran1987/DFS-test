import { Reducer } from 'redux';

import { initialState } from '../initialState';
import { tileListActionType } from '../../Helper/Constant';

const tileListReducer: Reducer<any> = (state = {}, action: any) => {
  switch (action.type) {
    case tileListActionType.REQUEST: {
      return { loading: false };
    }
    case tileListActionType.SUCCESS: {
      if (action.resp.length > 8) {
        action.resp = action.resp.splice(0, 8);
      }
      return { loading: false, data: action.resp };
    }
    case tileListActionType.ERROR: {
      return { loading: false, errors: action.errors };
    }
    default: {
      return state;
    }
  }
};

export default tileListReducer;
