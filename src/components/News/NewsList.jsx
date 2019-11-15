import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setNews} from "../../redux/news-reducer";
import Article from "./Article";
import Masonry from "react-masonry-component";
import css from './NewsList.css';

const NewsList = ({news,...props}) => {
    const masonryOptions={
        transitionDuration: 0,
        isFitWidth:true
    };
    useEffect(
        () => {
            props.setNews();
        }, []);
    return <Masonry options={masonryOptions} elementType={'ul'} className={css.list}>
        {news.map((article,index)=><Article key={index} article={article}/>)}
    </Masonry>
};

const mapStateToProps = state => ({
        news: state.news.news
    }
);

export default connect(mapStateToProps, {setNews})(NewsList);