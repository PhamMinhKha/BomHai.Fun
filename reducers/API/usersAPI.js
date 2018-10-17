import axios from 'axios';
import socket from './../../components/pages/script/socket.js';
class usersAPI {
  static click_doc_thong_bao(action){
    return new Promise((resolve, reject) => {
      console.log(action)
      axios.post(global.config.domain + '/clickDocThongBao',{
        idThongBao: action.id_thong_bao
      })
      .then(function (response) {
        if (response.data !== false) {
          
        }})
    })
  }
  static click_xem_thong_bao(action){
    return new Promise((resolve, reject) => {
      axios.post(global.config.domain + '/clickXemThongBao')
      .then(function (response) {
        console.log('usersAPI ==> line 20 ==> click_xem_thong_bao', response)
        if (response.data !== false) {
          resolve(response.data)
        }})
    })
  }
    static Dang_Nhap(action, state) {
        var token = action.token;
      return new Promise((resolve, reject) => {

axios.post(global.config.domain + '/checklogin', { token })
      .then(function (response) {
        if (response.data !== false) {
          let user = {
            username: response.data.ten,
            permission: response.data.quyen_hang, 
            id: response.data._id, 
            token: response.data.token,
            avatar: response.data.anh_dai_dien,
            ten_dang_nhap: response.data.ten_dang_nhap,
            voteComments: response.data.voteComments,
            votePosts: response.data.votePosts,
            clickThongBao: response.data.clickThongBao,
            thongBao: response.data.thongBao
          };
        //   console.log(response.data)
          localStorage.setItem('Login', response.data.token);
          console.log('vao check user dang nhap')
          socket.emit('dang nhap thanh cong', user);
          resolve(Object.assign({}, {
            user
       }));
        }
      })
      .catch(function (error) {
        console.log(error);
        reject(Object.assign({}, {
            error: res.data.error
          }));
      });
    })
}
}
export default usersAPI