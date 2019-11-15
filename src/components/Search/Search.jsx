import React,{useState} from 'react';
import css from './Search.css'
import {connect} from "react-redux";
import {searchNews} from "../../redux/news-reducer";

const Search=(props)=>{
    const [body,setBody]= useState('');
    const search =()=>{
        props.searchNews(body);
    };
    return <div className={css.searchPanel}>
        <input type="text" onChange={(e)=>setBody(e.target.value)}/>
        <button className={css.btn} onClick={search}>Search</button>
    </div>
};

const mapStateToProps=(state)=>({});
export default connect(mapStateToProps,{searchNews})(Search);