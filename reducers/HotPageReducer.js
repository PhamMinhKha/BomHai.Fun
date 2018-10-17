const HotPage = (state = null, action) => {
    switch(action.type){
        case 'CAP_NHAT_AXIOS_X':
            return {posts: [], trang: 1, location: action.posts.location};
        case 'CAP_NHAT_POSTS_HOT_PAGE':
            return action.posts;
        case 'UPVOTE_DOWNVOTE_POST_REDUCER':
        // state.votePosts = action.vote.votePosts;
        // return Object.assign({}, state);
        if(state)
       state.posts.filter((item, index) =>{
            if(item._id === action.changePost.post_id)
            {
                console.log('vao')
                // return state.posts[index].upVote = item.upVote + action.changePost.change; 
                return item.upVote = item.upVote + action.changePost.change; 
            }
        })
        return state;
        default:
            return state;
    }
}

export default HotPage;