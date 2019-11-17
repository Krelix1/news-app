import React, {useState} from 'react';
import css from './Search.css'
import {connect} from "react-redux";
import {setSearchBody} from "../../redux/news-reducer";
import {useHistory} from "react-router-dom";

const Search = (props) => {
    let history = useHistory();
    const [body, setBody] = useState('');
    const search = () => {
        if (body) {
            props.setSearchBody(body);
            setBody('');
            history.push('/search');
        }
    };
    const pressEnter = (event) => {
        if (event.key === 'Enter' && body) {
            props.setSearchBody(body);
            setBody('');
            history.push('/search');
        }
    };
    return <div className={css.searchPanel}>
        <input type="text" onKeyPress={pressEnter} value={body} onChange={(e) => setBody(e.target.value)}
               placeholder={'...'}/>
        <button className={css.btn} onClick={search}>Search</button>
    </div>
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps, {setSearchBody})(Search);