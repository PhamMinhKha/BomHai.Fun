const PostsReducer = (state = null, action) => {
    switch(action.type){
        case 'UP_VOTE_POST_X':
        return action;
        default: return state;
    }
}

export default PostsReducer;