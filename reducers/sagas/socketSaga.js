import { call, put, takeEvery, takeLatest, select, take } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* CapNhatSoLuongNguoiDung(action) {
   try {
       var SoLuong = action.soLuong;
    yield put({ type: 'CAP_NHAT_SO_LUONG_DUNG_X', SoLuong})
    // yield put({ type: 'UNSET_ERROR'})
   } catch (e) {
    console.log(e)
    yield put({type: 'SET_ERROR', error:e})
}
}
function* DanhSachNguoiVuaDangNhap(action){
    try{
        var taiKhoan = action.taiKhoan;
    yield put({type: 'DANH_SACH_NGUOI_VUA_DANG_NHAP_X', taiKhoan})
    }
    catch(e){
        console.log(e)
        yield put({type: 'SET_ERROR', error: e})
    }
}
export function* socketSaga() {
    yield takeLatest("CAP_NHAT_SO_LUONG_NGUOI_DUNG", CapNhatSoLuongNguoiDung);
    yield takeLatest("DANH_SACH_NGUOI_VUA_DANG_NHAP", DanhSachNguoiVuaDangNhap);
}
