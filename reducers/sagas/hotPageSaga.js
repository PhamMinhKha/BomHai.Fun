import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import postsAPI from './../API/postsAPI';
function* changePosts(action){
    try {
        var posts = yield call(postsAPI.LoadMorePosts, action);
        yield put({type: "CAP_NHAT_AXIOS_X", posts});
     } catch (e) {
        yield put({type: "ERROR"});
     }
}

export function* hotPageSaga() {
    yield takeLatest("CAP_NHAT_AXIOS", changePosts);
}
