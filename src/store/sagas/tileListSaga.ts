import { call, put, takeLatest } from 'redux-saga/effects';

import { loadTileList } from '../actions/tileListAction';
import { tileListActionType } from '../../Helper/Constant';

function* tileListSaga(action: any) {
  try {
    const resp = yield call(loadTileList, action);
    if (resp.error) {
      yield put({ type: tileListActionType.ERROR, error: resp.error });
    } else {
      yield put({ type: tileListActionType.SUCCESS, resp });
    }
  } catch (e) {
    yield put({ type: tileListActionType.ERROR, error: e.message });
  }
}
export default function* tileListWatcherSaga() {
  yield takeLatest(tileListActionType.REQUEST, tileListSaga);
}
