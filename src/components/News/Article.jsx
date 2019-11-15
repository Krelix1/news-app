import React from 'react';
import css from './Article.css'

const Article=({article,...props})=>{
    return <div className={css.article}>
        <h1 className={css.title}>{article.title}</h1>
        <h3 className={css.description}>{article.description}</h3>
        <p className={css.content}>{article.content}</p>
        <div className={css.about}>
            <span>{article.author}</span>
            <span>{article.publishedAt.slice(0,10).replace(/-/g,'.')}</span>
        </div>
    </div>
};
export default Article;