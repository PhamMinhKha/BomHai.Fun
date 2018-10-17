import { call, put, takeEvery, takeLatest, select, take } from 'redux-saga/effects';
import actions from './../actions/actions';
import usersAPI from './../API/usersAPI';
import 'regenerator-runtime/runtime';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* dang_nhap(action) {
   try {
    const getItems = state => state.Login;
    const state = yield select(getItems);
    const user = yield call(usersAPI.Dang_Nhap, action, state);
    // console.log('s0da', user)
    yield put({ type: 'DANG_NHAP_X', user})
    // yield put({ type: 'UNSET_ERROR'})
   } catch (e) {
    console.log(e)
    yield put({type: 'SET_ERROR', error:e})
}
}
function* dang_xuat(action){
    
    yield put({type: 'DANG_XUAT_X'})
}
function* thong_bao(action){
    console.log(action)
    var thongBao = action.thongBao;
    yield put({type: 'CAP_NHAT_THONG_BAO_X', thongBao})
}
function* click_xem_thong_bao(action){
    // console.log('userSaga.js ==> line 29 ==> click_xem_thong_bao',action)
    const thongBao = yield call(usersAPI.click_xem_thong_bao, action);
    console.log('userSaga.js ==> line 31 ==> user', thongBao)
    // var thongBao = user.thongBao;
    yield put({type: 'CAP_NHAT_THONG_BAO_X', thongBao})
}
function* click_doc_thong_bao(action){
    console.log(action)
    const user = yield call(usersAPI.click_doc_thong_bao, action);
    var id_thong_bao = action.thongBao;
    yield put({type: 'CAP_NHAT_THONG_BAO_DA_DOC_X', id_thong_bao})
}
export function* usersSaga() {
    yield takeLatest("DANG_NHAP", dang_nhap);
    yield takeLatest("DANG_XUAT", dang_xuat);
    yield takeLatest("CAP_NHAT_THONG_BAO", thong_bao);
    yield takeLatest("CLICK_XEM_THONG_BAO", click_xem_thong_bao);
    yield takeLatest("CLICK_DOC_THONG_BAO", click_doc_thong_bao);
    

}
