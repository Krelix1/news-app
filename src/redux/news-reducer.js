import {NewsAPI} from "../API/newsAPI";

const SET_NEWS = "SET_NEWS";
const SET_SEARCHING_NEWS = "SET_SEARCHING_NEWS";

const initialState = {
    news: [],
    searchNews:[]
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...action.news],
                countNews: action.news.length
            };
        case SET_SEARCHING_NEWS:
            return {
                ...state,
                searchNews: [...action.searchNews]
            };
        default:
            return state;
    }
};

const setNewsCreator = (news) => (
    {type: SET_NEWS, news}
);
const setSearchingNews = (searchNews)=>(
    {type: SET_SEARCHING_NEWS,searchNews}
    );
export const setNews = () => async (dispatch) => {
   let response = await NewsAPI.getTopHeadlins();
   dispatch(setNewsCreator(response.data.articles));
};
export const searchNews=(body)=> async (dispatch)=>{
  let response = await NewsAPI.getSearchingNews(body);
  dispatch(setSearchingNews(response.data.articles))
};
export default newsReducer;
