import React from "react";
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.headerCont}>

            <div>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
            <div>
                <NavLink to={'/registration'}>registration</NavLink>
            </div>
            <div>
                <NavLink to={'/profile'}>profile</NavLink>
            </div>
            <div>
                <NavLink to={'/recoveryPassword'}>recoveryPassword</NavLink>
            </div>
            <div>
                <NavLink to={'/newPassword'}>newPassword</NavLink>
            </div>
            <div>
                <NavLink to={'/error404'}>error404</NavLink>
            </div>
            <div>
                <NavLink to={'/superComponents'}>superComponents</NavLink>
            </div>

        </div>
    )
}