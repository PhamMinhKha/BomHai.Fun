import config from './../config/configClient';
 var  init = {
                domain: config.domain,
                modalStatus: false,
                modalUpload: false,
                audio: true
            }
const ConfigReducer = (state = init, action) => {
    switch(action.type){
        case 'AUDIO_EN_X': 
          return  Object.assign(state, null, {audio: !state.audio});
        case 'MODAL_LOGIN_X':
        state.modalStatus = !state.modalStatus;
        return Object.assign({}, state);
        case 'MODAL_UPLOAD_X':
        state.modalUpload = !state.modalUpload;
        return Object.assign({}, state);
        default: 
        return state;
    }
}

export default ConfigReducer;