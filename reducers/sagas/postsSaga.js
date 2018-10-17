import { call, put, takeEvery, takeLatest, select, take } from 'redux-saga/effects';
import actions from './../actions/actions';
import postsAPI from './../API/postsAPI';
import 'regenerator-runtime/runtime';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* upOrDownVote(action) {
   try {
    const getItems = state => state.Login;
    const state = yield select(getItems);
    const vote = yield call(postsAPI.setUpOrDownPost, action, state);
    // console.log('s0da', vote)
    // const getItems2 = state => state.HotPage;
    // const post_hot_page = yield select(getItems2);
    // console.log('postsSaga.js -> line 12 -> post_hot_page', post_hot_page);
   const changePost = action.changePost;
    yield put({ type: 'UPVOTE_DOWNVOTE_POST_REDUCER', changePost})
    yield put({ type: 'UP_OR_DOWN_VOTE_POST_X', vote})
    
    // yield put({ type: 'UNSET_ERROR'})
   } catch (e) {
    console.log(e)
    yield put({type: 'SET_ERROR', error:e})
}
}
export function* postsSaga() {
    yield takeLatest("VOTE_POST", upOrDownVote);
}
