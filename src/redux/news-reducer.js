import {NewsAPI} from "../API/newsAPI";

const SET_NEWS = "SET_NEWS";
const SET_SEARCH_BODY = "SET_SEARCH_BODY";

const initialState = {
    news: [],
    searchBody:''
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...action.news],
                countNews: action.news.length
            };
        case SET_SEARCH_BODY:
            return {
                ...state,
                searchBody: action.body
            };
        default:
            return state;
    }
};

const setNewsCreator = (news) => (
    {type: SET_NEWS, news}
);
export const setSearchBody = (body) => (
    {type: SET_SEARCH_BODY, body}
);

export const setNews = (type, body) => async (dispatch) => {
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
            response = await NewsAPI.getTopHeadlins();
            dispatch(setNewsCreator(response.data.articles));
            break;
        }

    }
};
export default newsReducer;
