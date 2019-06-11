import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.logo}>
                <div>
                    <img src="https://jobfilter.ru/uploaded_files/images/2019/04/21/2124740/tNannak540nV3foV.png"/>
                </div>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}><i className="fa fa-user"></i>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}><i className="fa fa-envelope"></i>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active}><i className="fa fa-newspaper-o"></i>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active}><i className="fa fa-music"></i>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active}><i className="fa fa-cogs"></i>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;
