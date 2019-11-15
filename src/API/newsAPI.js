import axios from "axios";

const apiKey='4cac2528d8f547eda5928b1b3f8ffb43';
const instance= axios.create({
    baseURL:'https://newsapi.org/v2/'
});

export const NewsAPI={
    getTopHeadlins(){
        return instance.get(`top-headlines?country=us&apiKey=${apiKey}`)
    },
    getSearchingNews(body){
        return instance.get(`everything?q=${body}&apiKey=${apiKey}`)
    }
};