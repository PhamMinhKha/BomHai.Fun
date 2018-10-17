import { call, put, takeEvery, takeLatest, select, take } from 'redux-saga/effects';
import actions from './../actions/actions';
import commentAPI from './../API/commentAPI';
import 'regenerator-runtime/runtime';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* changeLocation(action) {
   try {
    var location = action.location;
    yield put({ type: 'CHANGE_LOCATION_X', location})
   } catch (e) {
    console.log(e)
    yield put({type: 'SET_ERROR', error:e})
}
}
export function* locationSaga() {
    yield takeLatest("CHANGE_LOCATION", changeLocation);
}
