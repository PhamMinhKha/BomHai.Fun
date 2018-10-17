const init = [
    {
        stt: 1,
        loai: 'upVote',
        
    }
]
const loaiThongBao = (state = init, action) => {
    switch(action.type){
        case 'CAP_NHAT_THONG_BAO_DA_DOC_X':
        console.log(action)
        var id = action.id_thong_bao;
        state.thongBao = action.thongBao;
        return Object.assign({}, state);
    }
}