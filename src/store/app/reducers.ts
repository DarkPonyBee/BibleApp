import {AnyAction} from 'redux';
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';

import ACTION_TYPES from '../actionTypes';
import {AppState, STATUSES} from '../../types';

const INITIAL_STATE: AppState = {
  bibleGetStatus: STATUSES.DEFAULT,
  bible: undefined,
  favorites: [],
};

export const reducer = (
  state = INITIAL_STATE,
  {type, payload}: AnyAction,
): AppState => {
  switch (type) {
    case ACTION_TYPES.ADD_BIBLE_FAVORITE:
      const newFavorites = state.favorites.concat(payload);
      return {...state, favorites: uniqWith(newFavorites, isEqual)};
    case ACTION_TYPES.FETCH_BIBLE:
      return {...state, bibleGetStatus: STATUSES.LOADING};
    case ACTION_TYPES.FETCH_BIBLE_SUCCESS:
      return {...state, bibleGetStatus: STATUSES.SUCCESS, bible: payload};
    case ACTION_TYPES.FETCH_BIBLE_FAILURE:
      return {...state, bibleGetStatus: STATUSES.FAILURE};
    default:
      return state;
  }
};
