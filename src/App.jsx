import React, {useEffect, useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import TopListContainer from "./components/News/TopListContainer";
import SearchListContainer from "./components/News/SearchListContainer";
import css from './index.css';

const App = () => {
    const clearVisitorsCount = () => {
        let today = new Date().getDate();
        if (!localStorage.getItem('date')) {
            localStorage.setItem('date', JSON.stringify(today));
        } else {
            const date = JSON.parse(localStorage.getItem('date'));
            console.log('date ', date, ' today ', today)
            if (today !== date) {
                localStorage.setItem('visitors', '1');
                localStorage.setItem('date', JSON.stringify(today));
            }
        }
    };
    let [visitorsCount, setVisitorsCount] = useState(() => {
        clearVisitorsCount();
        const visitors = localStorage.getItem('visitors');
        return visitors ? JSON.parse(visitors) : 0
    });
    useEffect(() => {
        setVisitorsCount(visitorsCount++);
    }, []);
    useEffect(() => {
        localStorage.setItem('visitors', JSON.stringify(visitorsCount));
    }, [visitorsCount]);

    return <div className={css.appWrapper}>
        <BrowserRouter>
            <Header/>
            <Nav/>
            <main className={css.main}>
                <Switch>
                    <Route exact path={'/'} render={() =>
                        <TopListContainer/>
                    }/>
                    <Route path={'/search'} render={() =>
                        <SearchListContainer/>
                    }/>
                </Switch>
            </main>
            <footer className={css.footer}>
                <ul className={css.contacts}>
                    <li><FontAwesomeIcon icon={faEnvelope}/> kreksalix@gmail.com</li>
                    <li><a href={'https://github.com/krelix1/'}><FontAwesomeIcon icon={faGithub}/> </a></li>
                    <li><a href={'https://www.linkedin.com/in/krelix1/'}><FontAwesomeIcon icon={faLinkedin}/></a></li>
                </ul>
                <p>Count of visitors today:{visitorsCount}</p>
            </footer>
        </BrowserRouter>
    </div>
};


export default App;