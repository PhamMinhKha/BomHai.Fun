const Location = (state = null, action) => {
    switch(action.type){
        case 'CHANGE_LOCATION_X':
        return action.location;
        default: return state;
    }
}

export default Location;