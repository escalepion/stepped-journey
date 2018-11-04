import { takeLatest, put } from "redux-saga/effects";

import {
  ADD_BRAND,
  ADD_BRAND_NAME,
  CHANGE_PAGE,
  CHANGE_PAGE_NUMBER,
  ADD_DESCRIBE,
  ADD_DESCRIBE_TEXT,
  ADD_OBJECTIVE,
  ADD_OBJECTIVE_TEXT
} from './types';

export function* rootSaga() {
  yield takeLatest(ADD_BRAND, addBrand);
  yield takeLatest(ADD_DESCRIBE, addDescribe);
  yield takeLatest(CHANGE_PAGE, changePage);
  yield takeLatest(ADD_OBJECTIVE, addObjective);
}

function* addBrand({ brandName, operation }) {
  yield put({ type: ADD_BRAND_NAME, payload: brandName });
  yield put({ type: CHANGE_PAGE_NUMBER, payload: operation });
}

function* addDescribe({ text, operation }) {
  yield put({ type: ADD_DESCRIBE_TEXT, payload: text });
  yield put({ type: CHANGE_PAGE_NUMBER, payload: operation });
}

function* changePage({ operation }) {
  yield put({ type: CHANGE_PAGE_NUMBER, payload: operation });
}

function* addObjective({ objectiveText }) {
  yield put({ type: ADD_OBJECTIVE_TEXT, payload: objectiveText });
}
