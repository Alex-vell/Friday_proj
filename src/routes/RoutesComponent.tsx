import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../components/login/Login";
import {Registration} from "../components/registration/Registration";
import {Profile} from "../components/profile/Profile";
import {RecoveryPassword} from "../components/recoveryPassword/RecoveryPassword";
import {NewPassword} from "../components/newPassword/NewPassword";
import {Error404} from "../components/error404/Error404";
import {SuperComponents} from "../components/superComponents/SuperComponents";
import App from "../App";

export const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/recoveryPassword' element={<RecoveryPassword/>}/>
                <Route path='/newPassword' element={<NewPassword/>}/>
                <Route path='/superComponents' element={<SuperComponents/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}