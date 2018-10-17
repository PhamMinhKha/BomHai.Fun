import axios from 'axios';
class commentAPI {
    static setUpOrDownComment(action, state) {
      return new Promise((resolve, reject) => {
        // console.log('commentAPI', action);
        if(action.changeComment.change > 0 && state.voteComments.upVoteComments.indexOf(action.changeComment.comment_id) >= 0){
          return ;
        }
        else if(action.changeComment.change < 0 && state.voteComments.downVoteComments.indexOf(action.changeComment.comment_id) >= 0){
          return ;
        }

        axios.post(global.config.domain + '/comment/UpOrDown',{
          comment_id: action.changeComment.comment_id,
          change:action.changeComment.change
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
              // console.log(state)
              // return state = {voteComments: [...state, 'ok']}; 
              if(action.changeComment.change>0)
              // state.voteComments= {upVoteComments: [...state.voteComments.upVoteComments, action.changeComment.comment_id]}
                 {
                    state.voteComments.upVoteComments = [...state.voteComments.upVoteComments, action.changeComment.comment_id]
                    if(state.voteComments.downVoteComments.indexOf(action.changeComment.comment_id)>=0)
                    {
                      let index = state.voteComments.downVoteComments.indexOf(action.changeComment.comment_id);
                      state.voteComments.downVoteComments.splice(index, 1);
                    }
                  }
              else 
              {
                state.voteComments.downVoteComments = [...state.voteComments.downVoteComments, action.changeComment.comment_id]
                if(state.voteComments.upVoteComments.indexOf(action.changeComment.comment_id)>=0)
                    {
                      let index = state.voteComments.upVoteComments.indexOf(action.changeComment.comment_id);
                      state.voteComments.upVoteComments.splice(index, 1);
                    }
              }
              // state.voteComments=  {downVoteComments: [...state.voteComments.downVoteComments, action.changeComment.comment_id]}
              var voteComments = state.voteComments;
              // state = [...state];
              resolve(Object.assign({}, {
                voteComments
           }));
          }
      })
          
      });
    }
   
   
   }
   
   export default commentAPI;
   