import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setNews} from "../../redux/news-reducer";
import Article from "./Article";
import Masonry from "react-masonry-component";
import css from './NewsList.css';
import {useHistory} from "react-router-dom";

const NewsList = ({news, ...props}) => {
    const url=props.match && props.match.url.slice(1);
    const masonryOptions = {
        transitionDuration: 0,
        isFitWidth: true
    };
    let history = useHistory();
    useEffect(() => {
        if (props.type === 'search' && props.searchBody === '') {
            history.push('/')
        } else if (props.type === 'search') {
            props.setNews(props.type, props.searchBody)
        } else {
            props.setNews(props.type,url)
        }
    }, [props.type, props.searchBody]);
    return props.isLoad ? <p className={css.preloader}>News App...</p> : news.length !== 0
        && <Masonry
            options={masonryOptions}
            elementType={'ul'}
            className={css.list}>
            {news.map((article, index) => <Article key={index} article={article}/>)}
        </Masonry>
};

const mapStateToProps = state => ({
        news: state.news.news,
        searchBody: state.news.searchBody,
        isLoad: state.news.isLoad
    }
);

export default connect(mapStateToProps, {setNews})(NewsList);