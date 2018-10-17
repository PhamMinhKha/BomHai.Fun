import { combineReducers } from 'redux';
import Login from './Login';
import Logout from './Logout';
import Categories from './categoryReducers';
import Error from './errorReducer';
import Config from './configReducer';
import HotPage from './HotPageReducer';
import Socket from './socketReducer';
import Location from './Location';

const appReducers = combineReducers({
    Login,
    DangXuat: Logout,
    Categories,
    HotPage,
    Error,
    Config,
    Socket,
    Location
});

export default appReducers;