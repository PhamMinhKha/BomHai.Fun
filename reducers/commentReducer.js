const CommentReducer = (state = {upVoteComments : [], downVoteComments: [] }, action) => {
    switch(action.type){
        case 'UP_OR_DOWN_VOTE_COMMENT':
        console.log('123123123')
        console.log(action)
        return state
        default: return state;
    }
}

export default CommentReducer;