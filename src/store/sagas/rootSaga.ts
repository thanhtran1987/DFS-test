import { all } from 'redux-saga/effects';

import tileListWatcherSaga from './tileListSaga';

export default function* rootSaga() {
  yield all([tileListWatcherSaga()]);
}
