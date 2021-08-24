import {call, put, takeLatest} from '@redux-saga/core/effects';
import {AnyAction} from 'redux';
import ACTION_TYPES from '../actionTypes';
import {fetchBibleFailure, fetchBibleSuccess} from './actions';

const fetchBible = async ({
  title,
  chapter,
}: {
  title: string;
  chapter: number;
}): Promise<any> => {
  const response = await fetch(
    `https://bible-api.com/${title} ${chapter}`,
  ).then(res => res.json());
  return response;
};

function* bibleGet({payload}: AnyAction) {
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
