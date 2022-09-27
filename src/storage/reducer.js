import { 
    FETCH_POPULAR_GIFS, 
    FETCH_SEARCH_GIFS,
    FETCH_SEARCH_STICKERS,
    FETCH_RANDOM_GIFS,
    SET_ACTIV_TAB,
    FETCH_RANDOM_PHOTOS,
    CHANGE_IS_LOADING,
    CHANGE_LIMIT, 
    SET_TITLE,
} from './actions'


const initialState = {
    popularGifs: [],
    randomGifs: [],
    searchGifs: [],
    searchStickers: [],
    randomPhotos: [],
    tab: '', 
    isLoading: false,
    offset: 3,
    title: ''
};


function reducer (state = initialState, {type, payload}) {

    switch(type) {
        case FETCH_POPULAR_GIFS:
            return {
                ...state, 
                popularGifs:payload 
            }
        case FETCH_SEARCH_GIFS:
            return {
                ...state, 
                searchGifs:payload 
            }
        case FETCH_SEARCH_STICKERS:
            return {
                ...state, 
                searchStickers:payload
            }
        case FETCH_RANDOM_GIFS:
            return {
                ...state, 
                randomGifs:payload 
            }
        case FETCH_RANDOM_PHOTOS:
            return {
                ...state, 
                randomPhotos:payload 
            }
        case SET_ACTIV_TAB:
            return {
                ...state, 
                tab:payload 
            }
        case CHANGE_IS_LOADING:
            return {
                ...state, 
                isLoading:payload 
            }
        case CHANGE_LIMIT:
            return {
                ...state, 
                offset:payload 
            }
        case SET_TITLE:
            return {
                ...state, 
                title:payload 
            }
        default: return state;
    }
}

export default reducer;