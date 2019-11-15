import React from 'react';
import css from './index.css';
import Header from "./components/Header/Header";

const App = () => {
    return <div className={css.appWrapper}>
        <Header/>
    </div>
};

export default App;