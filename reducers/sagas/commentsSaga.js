import { call, put, takeEvery, takeLatest, select, take } from 'redux-saga/effects';
import actions from './../actions/actions';
import commentAPI from './../API/commentAPI';
import 'regenerator-runtime/runtime';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* upOrDownVote(action) {
   try {
    const getItems = state => state.Login;
    const state = yield select(getItems);
    const comment = yield call(commentAPI.setUpOrDownComment, action, state);
    // console.log('s0da', comment)
    yield put({ type: 'UP_OR_DOWN_VOTE_COMMENT_X', comment})
    // yield put({ type: 'UNSET_ERROR'})
   } catch (e) {
    console.log(e)
    yield put({type: 'SET_ERROR', error:e})
}
}
export function* commentsSaga() {
    yield takeLatest("UP_OR_DOWN_VOTE_COMMENT", upOrDownVote);
}
