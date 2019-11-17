import React from 'react';
import Search from "../Search/Search";
import {NavLink} from 'react-router-dom';
import css from './Nav.css'
const Nav = ()=>{

    return <nav className={css.nav}>
        <NavLink to={'/'}>Top</NavLink>
        <Search/>
    </nav>
};
export default Nav;