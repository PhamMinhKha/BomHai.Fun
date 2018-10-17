import axios from 'axios';
// import socket from './../../components/pages/script/socket';
import socket from './../../components/pages/script/socket.js';
class postsAPI {
  static randomPost(action, state){
    return new Promise((resolve, reject) => {
      axios(
        {
            method: 'post',
            url: global.config.domain + '/randomPost' ,
            timeout: 10000
        })
        .then((res) => {
              resolve({ randomPost: res.data })
        }).catch((err) => {
            console.log(err);
        })
        ;
    })}
  static LoadMorePosts(action, state){
      return new Promise((resolve, reject) => {
        var dataPost = {
          trang: 1
        }
        axios(
          {
              method: 'post',
              url: global.config.domain + '/loadMore' ,
              timeout: 10000,
              data: dataPost
          })
          .then((res) => {
                resolve({ posts: res.data.posts, trang: res.data.trang })
          }).catch((err) => {
              console.log(err);
              if (err.code == 'ECONNABORTED') {
                  document.getElementById("loadMore").innerHTML('<Button className="btn btn-primary margin-left-right-5">Click Để Xem Thêm</Button>')
              }
          })
          ;
      })
    }
    static setUpOrDownPost(action, state) {
      return new Promise((resolve, reject) => {
        // console.log('postsAPI', action);
        if(action.changePost.change > 0 && state.votePosts.upVotePosts.indexOf(action.changePost.post_id) >= 0){
          return ;
        }
        else if(action.changePost.change < 0 && state.votePosts.downVotePosts.indexOf(action.changePost.post_id) >= 0){
          return ;
        }
        // console.log('postsAPI.js -> line 12')
        axios.post(global.config.domain + '/posts/UpOrDown',{
          post_id: action.changePost.post_id,
          change:action.changePost.change
      }).then((res) =>{
          if(res.data.error)
          {
              console.log(res.data.error)
              reject(Object.assign({}, {
                error: res.data.error
              }));
              // this.setState({
              //     error: res.data.error
              // })
          }
          else{
            //   console.log('postsAPI.js -> line 28')
              // return state = {votePosts: [...state, 'ok']}; 
              
              if(action.changePost.change>0)
                 {
                   console.log('truoc khi emit')
                    socket.emit('user_id cua bai post duoc upvote',{user_ObjectId: action.changePost.user_ObjectId, post_id: action.changePost.post_id});
                    state.votePosts.upVotePosts = [...state.votePosts.upVotePosts, action.changePost.post_id]
                    if( state.votePosts.downVotePosts && state.votePosts.downVotePosts.indexOf(action.changePost.post_id)>=0)
                    {
                      let index = state.votePosts.downVotePosts.indexOf(action.changePost.post_id);
                      state.votePosts.downVotePosts.splice(index, 1);
                    }
                  }
              else 
              {
                state.votePosts.downVotePosts = [...state.votePosts.downVotePosts, action.changePost.post_id]
                if( state.votePosts.upVotePosts && state.votePosts.upVotePosts.indexOf(action.changePost.post_id)>=0)
                    {
                      let index = state.votePosts.upVotePosts.indexOf(action.changePost.post_id);
                      state.votePosts.upVotePosts.splice(index, 1);
                    }
              }
              var votePosts = state.votePosts;
              // console.log('postAPI.js -> line 51')
              resolve(Object.assign({}, {
                votePosts
           }));
          }
      })
          
      });
    }
   
   
   }
   
   export default postsAPI;
   