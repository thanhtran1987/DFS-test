import { Reducer } from 'redux';

import { initialState } from '../initialState';
import { pageActionType } from '../../Helper/Constant';

const pageReducer: Reducer<any> = (state = {}, action: any) => {
  switch (action.type) {
    case pageActionType.TOGGLEMODAL: {
      let isShow = -1;
      if (state.showModal < 0) {
        isShow = action.payload;
      }
      return { showModal: isShow };
    }
    default: {
      return state;
    }
  }
};

export default pageReducer;
