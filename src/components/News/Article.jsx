import React,{useState} from 'react';
import css from './Article.css'

const Article=({article})=>{
    const [liked,setLike]=useState(false);
    const toggle=()=>{
        setLike(!liked);
    };
    return <div className={css.article}>
        <a href={article.url}><h1 className={css.title}>{article.title}</h1></a>
        <h3 className={css.description}>{article.description}</h3>
        <p className={css.content}>{article.content}</p>
        <div className={css.artFooter}>
            {article.urlToImage && <img src={article.urlToImage} alt="articleImg"/>}
            <div className={css.about}>
                <span>{article.author}</span>
                <span>{article.publishedAt.slice(0, 10).replace(/-/g, '.')}</span>
                <button className={css.btn} onClick={toggle}>{liked?'Unlike':'Like'}</button>
            </div>
        </div>
    </div>
};
export default Article;