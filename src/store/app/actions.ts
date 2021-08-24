import {AnyAction} from 'redux';

import ACTION_TYPES from '../actionTypes';

export const addToFavorites = (title: string, chapter: number): AnyAction => ({
  type: ACTION_TYPES.ADD_BIBLE_FAVORITE,
  payload: {title, chapter},
});

export const fetchBible = (title: string, chapter: number): AnyAction => ({
  type: ACTION_TYPES.FETCH_BIBLE,
  payload: {title, chapter},
});

export const fetchBibleSuccess = (payload): AnyAction => ({
  type: ACTION_TYPES.FETCH_BIBLE_SUCCESS,
  payload: payload,
});

export const fetchBibleFailure = (): AnyAction => ({
  type: ACTION_TYPES.FETCH_BIBLE_FAILURE,
});
