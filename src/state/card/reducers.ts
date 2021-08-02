import { successGenerate } from '../common';
import * as Types from './types';

// Initial State
const INIT_STATE = {
  data: [],
};

// Type
type ActionType = {
  type: string;
  payload: any;
};

const card = (state = INIT_STATE, { type, payload }: ActionType) => {
  switch (type) {
    case successGenerate(Types.GET_ALL_CARDS):
      return {
        ...state,
        data: payload,
      };
    case successGenerate(Types.SEARCH_CARD):
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export { card };
