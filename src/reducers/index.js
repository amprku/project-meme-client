import { combineReducers } from 'redux';
import facebookLogin from './login/login-reducer.js';
import userInformation from './login/user-information.js';
import loginStatus from './login/login-status.js'
import leftNavToggle from './session/showNav.js'

const rootReducer = combineReducers({
    facebookLogin,
    userInformation,
    loginStatus,
    leftNavToggle
});

export default rootReducer;