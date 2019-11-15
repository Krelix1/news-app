import React from 'react';
import css from './Header.css'
const Header = (props) => {
    const date = new Date();
    const today=`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
    return <header className={css.header}>
        <h1 className={css.title}>News app</h1>
        <p className={css.today}>{today}</p>
    </header>
};

export default Header;