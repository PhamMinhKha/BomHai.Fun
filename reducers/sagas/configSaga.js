import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
// import config from './../../config/config';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* getConfig(action) {
//    try {
//       yield put({type: "CONFIG_X", config});
//    } catch (e) {
//       yield put({type: "ERROR"});
//    }
// }
function* changeModalStatus(){
    try {
        yield put({type: "MODAL_LOGIN_X"});
     } catch (e) {
        yield put({type: "ERROR"});
     }
}
function* changeModalUpload(){
    try {
        yield put({type: "MODAL_UPLOAD_X"});
     } catch (e) {
        yield put({type: "ERROR"});
     }
}
function* changeAudio(){
    try {
        yield put({type: "AUDIO_EN_X"});
     } catch (e) {
        yield put({type: "ERROR"});
     }
}
export function* configSaga() {
    yield takeLatest("MODAL_LOGIN", changeModalStatus);
    yield takeLatest("MODAL_UPLOAD", changeModalUpload);
    yield takeLatest("AUDIO_EN", changeAudio);
}
