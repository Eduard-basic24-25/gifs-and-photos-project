import { FETCH_GIFS, FETCH_SEARCH_GIFS } from './actions'


const initialState = {
    gifs: [],
    searchGifs: [],
};


function reducer (state = initialState, {type, payload}) {

    switch(type) {
        case FETCH_GIFS:
            return {
                ...state, 
                gifs:payload 
            }
        case FETCH_SEARCH_GIFS:
            return {
                ...state, 
                searchGifs:payload 
            }
        default: return state;
    }
}

export default reducer;