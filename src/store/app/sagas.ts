import {call, put, takeLatest} from '@redux-saga/core/effects';
import {AnyAction} from 'redux';
import {IChapter} from '../../types';
import ACTION_TYPES from '../actionTypes';
import {fetchBibleFailure, fetchBibleSuccess} from './actions';

const fetchBible = async (chapter: IChapter): Promise<any> => {
  const response = await fetch(
    `https://bible-api.com/${chapter.title} ${chapter.chapter}`,
  ).then(res => res.json());
  return response;
};

function* bibleGet({payload}: {payload: IChapter}) {
  try {
    const {title, chapter} = payload;
    const response = yield call(fetchBible, {title, chapter});
    yield put(fetchBibleSuccess(response));
  } catch (error) {
    yield put(fetchBibleFailure());
  }
}

export default function* saga() {
  yield takeLatest(ACTION_TYPES.FETCH_BIBLE, bibleGet);
}
