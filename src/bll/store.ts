import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from "./login-reducer";
import {registrationReducer} from "./registration-reducer";
import {recoveryPasswordReducer} from "./recoveryPassword-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import {profileReducer} from "./profile-reducer";


const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    recoveryPassword: recoveryPasswordReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;


