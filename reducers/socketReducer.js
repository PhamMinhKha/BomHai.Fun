const Socket = (state = {nguoiDungOnline: 0, vuaDangNhap:[] , binhLuanCuoi: [], moiDangKy: []}, action) => {
    switch(action.type){
        case 'CAP_NHAT_SO_LUONG_DUNG_X':
            return  Object.assign({}, state, {nguoiDungOnline: action.SoLuong});
        case 'DANH_SACH_NGUOI_VUA_DANG_NHAP_X':
            return  Object.assign({}, state, {vuaDangNhap: action.taiKhoan});
        default: return state;
    }
}

export default Socket;