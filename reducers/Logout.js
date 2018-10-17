const Logout = (state = 'Chua Dang Nhap', action) => {
    switch(action.type){
        case 'DANG_XUATx':
            return action.username;
        default:
            return state;
    }
}

export default Logout;