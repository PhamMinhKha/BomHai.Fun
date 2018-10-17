const init = {
    username: '',
    permission: null,
    avatar: null,
    ten_dang_nhap: null,
    voteComments: {
        upVoteComments: [],
        downVoteComments: []
    },
    votePosts:{
        upVotePosts: [],
        downVotePosts: []
    },
    clickThongBao: 0,
    thongBao:[]
}
const Login = (state = init, action) => {
    switch(action.type){
        case 'CAP_NHAT_THONG_BAO_DA_DOC_X':
        console.log(action)
        var id = action.id_thong_bao;
        state.thongBao = action.thongBao;
        return Object.assign({}, state);
        case 'CAP_NHAT_THONG_BAO_X':
            console.log('Login ==> line 25 ==> action.thongBao', action.thongBao)
            // action.thongBao.map(item => item.trangThaiThongBao = 1)
            state.thongBao = action.thongBao;
            return Object.assign({}, state);
        case 'DANG_NHAP_X':
            state = action.user.user
            // console.log(action.user)
            return Object.assign({}, state);
        case 'UP_OR_DOWN_VOTE_COMMENT_X':
            state.voteComments = action.comment.voteComments;
            return Object.assign({}, state);
        case 'UP_OR_DOWN_VOTE_POST_X':
            state.votePosts = action.vote.votePosts;
            return Object.assign({}, state);
        case 'CHUA_DANG_NHAP':
            state = {
                error: "Bạn chưa đăng nhập",
                code: "1001"
            }
            return state;
        case 'DANG_XUAT_X':
            // alert('ok');
            console.log(action)
            // if(action.data)
            // return init;
            // else return state;
            // state.voteComments = action.comment.voteComments;
            return Object.assign({username: null}, init);
        default:
            return state;
    }
}

export default Login;