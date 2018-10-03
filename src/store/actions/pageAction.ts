import { pageActionType } from '../../Helper/Constant';

export const toggleModal = (data: any) => {
  return { type: pageActionType.TOGGLEMODAL, payload: data };
};
