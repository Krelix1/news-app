import React from 'react';
import Search from "../Search/Search";
import {NavLink} from 'react-router-dom';
import css from './Nav.css'

const Nav = () => {
    return <nav className={css.nav}>
        <div className={css.links}>
            <NavLink to={'/top'} activeClassName={css.active} className={css.navLink}>Top</NavLink>
            <NavLink to={'/cbc-news'} activeClassName={css.active} className={css.navLink}>CBC</NavLink>
            <NavLink to={'/abc-news'} activeClassName={css.active} className={css.navLink}>ABC</NavLink>
            <NavLink to={'/bbc-news'} activeClassName={css.active} className={css.navLink}>BBC</NavLink>
        </div>
        <Search/>
    </nav>
};
export default Nav;