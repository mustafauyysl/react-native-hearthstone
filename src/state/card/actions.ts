// Api
import api from '../../services/api';
import * as Types from './types';
import { requestGenerate } from '../common';

// Get all cards
const actionGetAllCards = (callback = {}) => ({
  type: requestGenerate(Types.GET_ALL_CARDS),
  api: api.getAllCards,
  callback,
});

// Search card
const actionSearchCard = (payload: any) => ({
  type: requestGenerate(Types.SEARCH_CARD),
  api: api.searchCard,
  payload: { data: payload?.text },
});

export { actionGetAllCards, actionSearchCard };
