import {NewsAPI} from "../API/newsAPI";

const SET_NEWS = "SET_NEWS";
const SET_SEARCH_BODY = "SET_SEARCH_BODY";
const TOGGLE_LOAD = "TOGGLE_LOAD";

const initialState = {
    news: [],
    searchBody: '',
    isLoad: false
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...action.news],
                countNews: action.news.length,
                isLoad: false
            };
        case SET_SEARCH_BODY:
            return {
                ...state,
                searchBody: action.body,
            };
        case TOGGLE_LOAD:
            return {
                ...state,
                isLoad: action.isLoad
            };
        default:
            return state;
    }
};
const toggleLoad = (isLoad) => (
    {type: TOGGLE_LOAD, isLoad}
);
const setNewsCreator = (news) => (
    {type: SET_NEWS, news}
);
export const setSearchBody = (body) => (
    {type: SET_SEARCH_BODY, body}
);

export const setNews = (type, body) => async (dispatch) => {
    dispatch(toggleLoad(true));
    let response;
    switch (type) {
        case 'topHeadlines':
            response = await NewsAPI.getTopHeadlins();
            dispatch(setNewsCreator(response.data.articles));
            break;
        case 'search': {
            response = await NewsAPI.getSearchingNews(body);
            dispatch(setNewsCreator(response.data.articles));
            break;
        }
        default: {
            response = await NewsAPI.getSearchSource(body);
            dispatch(setNewsCreator(response.data.articles));
            break;
        }


    }
};
export default newsReducer;
