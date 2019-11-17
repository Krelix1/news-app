import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setNews} from "../../redux/news-reducer";
import Article from "./Article";
import Masonry from "react-masonry-component";
import css from './NewsList.css';
import {useHistory} from "react-router-dom";

const SearchListContainer = ({news, searchNews, ...props}) => {
    const masonryOptions = {
        transitionDuration: 0,
        isFitWidth: true
    };
    let history = useHistory();
    if (props.searchBody === '') {
        history.push('/')
    } else {
        useEffect(() => {
            props.setNews('search', props.searchBody)
        }, [props.searchBody]);
    }
    return news.length !== 0
        ? <Masonry
            options={masonryOptions}
            elementType={'ul'}
            className={css.list}>
            {news.map((article, index) => <Article key={index} article={article}/>)}
        </Masonry>
        : <p className={css.preloader}>News App...</p>
};

const mapStateToProps = state => ({
        news: state.news.news,
        searchBody: state.news.searchBody
    }
);

export default connect(mapStateToProps, {setNews})(SearchListContainer);