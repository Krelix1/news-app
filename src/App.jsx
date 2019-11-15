import React from 'react';
import css from './index.css';
import Header from "./components/Header/Header";
import NewsList from "./components/News/NewsList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return <div className={css.appWrapper}>
        <Header/>
        <main className={css.main}>
            <NewsList/>
        </main>
        <footer className={css.footer}>
            <ul className={css.contacts}>
                <li><FontAwesomeIcon icon={faEnvelope}/> kreksalix@gmail.com</li>
                <li><a href={'https://github.com/krelix1/'}><FontAwesomeIcon icon={faGithub}/> </a></li>
                <li><a href={'https://www.linkedin.com/in/krelix1/'}><FontAwesomeIcon icon={faLinkedin}/></a></li>
            </ul>
        </footer>
    </div>
};

export default App;