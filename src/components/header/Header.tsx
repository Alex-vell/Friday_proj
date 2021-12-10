import React from "react";
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.headerCont}>

            <div className={s.item}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/registration'}>registration</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/profile'}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/recoveryPassword'}>recoveryPassword</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/newPassword'}>newPassword</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/error404'}>error404</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/superComponents'}>superComponents</NavLink>
            </div>

        </div>
    )
}