import {NewsAPI} from "../API/newsAPI";

const SET_NEWS = "SET_NEWS";

const initialState = {
    news: [],
    countNews: 0
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...action.news],
                countNews: action.news.length
            };
        default:
            return state;
    }
};

const setNewsCreator = (news) => (
    {type: SET_NEWS, news}
);

export const setNews = () => (dispatch) => {
    NewsAPI.getTopHeadlins().then(response => {
        dispatch(setNewsCreator(response.data.articles))
    });
};
export default newsReducer;