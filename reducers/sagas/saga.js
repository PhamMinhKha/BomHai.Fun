import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchUser(action) {
   try {
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    take('xxx', console.log(1111))
    console.log(action);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}