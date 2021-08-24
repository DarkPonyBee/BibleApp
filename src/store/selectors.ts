import {STATUSES, Bible, IChapter} from '../types';
import {RootState} from './index';

export const getBible = (state: RootState): Bible | undefined =>
  state.appReducer.bibleGetStatus === STATUSES.SUCCESS
    ? state.appReducer.bible
    : undefined;

export const getFavorites = (state: RootState): IChapter[] =>
  state.appReducer.favorites;
