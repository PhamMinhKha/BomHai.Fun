import { fork, all} from 'redux-saga/effects';
import {commentsSaga} from './commentsSaga';
import {postsSaga} from './postsSaga';
import {usersSaga} from './usersSaga';
import {configSaga} from './configSaga';
import {hotPageSaga} from './hotPageSaga';
import {socketSaga} from './socketSaga';
import {locationSaga} from './locationSaga';
function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield all(
    [ commentsSaga(), postsSaga(), usersSaga(),  configSaga(), hotPageSaga(), socketSaga(), locationSaga()]
)
  
}

export default rootSaga;
