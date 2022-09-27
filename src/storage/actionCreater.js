import { 
    FETCH_POPULAR_GIFS,
    FETCH_RANDOM_GIFS,
    FETCH_SEARCH_GIFS,
    FETCH_SEARCH_STICKERS,
    FETCH_RANDOM_PHOTOS,
    SET_ACTIV_TAB,
    CHANGE_IS_LOADING,
    CHANGE_LIMIT,
    SET_TITLE,
} from './actions'
import axios from 'axios'



const api = 'https://api.giphy.com/v1/gifs';
const APIKey = 'MGbYYwZn5llmulEU0q07Nyc73DbNUWYE'; 

const addPopularGifs = (popularGifs) => {
    return {
        type: FETCH_POPULAR_GIFS,
        payload: popularGifs,
    }
}
const getPopularGifs = () => {
    
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            const response = await axios.get(`${api}/trending?api_key=${APIKey}&limit=3`)
            dispatch(addPopularGifs(response.data.data))
            setTimeout(() => dispatch(isLoading(false)),1500)
        } catch (err) {
            console.log('Error 404', err.message)
        }
    }
};
const addRandomPageGifs = (startPageGifs) => {
    return {
        type: FETCH_RANDOM_GIFS,
        payload: startPageGifs,
    }
}
const getRandomGifs = () => {
    
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            const firstRequest = await axios.get(`${api}/random?api_key=${APIKey}`);
            const firstResponse = firstRequest.data.data;
            const secondRequest = await axios.get(`${api}/random?api_key=${APIKey}`);
            const secondResponse = secondRequest.data.data;
            const thirdRequest = await axios.get(`${api}/random?api_key=${APIKey}`);
            const thirdResponse = thirdRequest.data.data;
            const response = [firstResponse,secondResponse,thirdResponse];
            dispatch(addRandomPageGifs(response))
            setTimeout(() => dispatch(isLoading(false)),1000)
           
        } catch (err) {
            console.log('Error 404', err.message)
        }
    }
};


const searchGifsData = (searchData) => {
    return {
        type: FETCH_SEARCH_GIFS,
        payload: searchData,
    }
}
const searchGifs = (searchData) => {
    
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            const response = await axios.get(`${api}/search?api_key=${APIKey}&limit=3&offset=${searchData.offset}&q=${searchData.query}`)
            dispatch(searchGifsData(response.data.data))
            setTimeout(() => dispatch(isLoading(false)),1000)
        } catch (err) {
            console.log('Error 404', err.message)
        }
    }
}
const searchStickersData = (stickersData) => {
    return {
        type: FETCH_SEARCH_STICKERS,
        payload: stickersData,
    }
}
const searchStickers = (stickersData) => {
    
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            const response = await axios.get(`https://api.giphy.com/v1/stickers/search?api_key=${APIKey}&limit=3&offset=${stickersData.offset}&q=${stickersData.query}`)
            dispatch(searchStickersData(response.data.data))
            setTimeout(() => dispatch(isLoading(false)),1000)
        } catch (err) {
            console.log('Error 404', err.message)
        }
    }
}



const addRandomPhotos = (randomPhoto) => {
    return {
        type: FETCH_RANDOM_PHOTOS,
        payload: randomPhoto,
    }
}
const getRandomPhotos = () => {
    let randomStatusCode = Math.floor((Math.random() * 31) + 400);
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            let firstRequest = await axios.get(`https://randomfox.ca/floof`);
            // let secondRequest = await axios.get(`https://http.cat/${randomStatusCode}`);
            let secondRequest = await axios.get(`https://randomfox.ca/floof`);
            // let thirdRequest = await axios.get(`https://http.cat/${randomStatusCode}`);
            let thirdRequest =  await axios.get(`https://randomfox.ca/floof`);;
            let resolve = [firstRequest,secondRequest,thirdRequest]
            // let result = [firstRequest,secondRequest,thirdRequest];
            dispatch(addRandomPhotos(resolve))
            setTimeout(() => dispatch(isLoading(false)),1500)
        } catch (err) {
            console.log('Error 404', err.message)
        }
    }
}

const setActiveTab = (tab) => {
    return {
        type: SET_ACTIV_TAB,
        payload: tab,
    }
}

const isLoading = (flag) => {
    return {
        type: CHANGE_IS_LOADING,
        payload: flag, 
    }
}
const changeLimit = (limit) => {
    return {
        type: CHANGE_LIMIT,
        payload: limit, 
    }
}
const setTitle = (title) => {
    return {
        type: SET_TITLE,
        payload: title, 
    }
}






export { 
    getPopularGifs,   
    getRandomPhotos,
    getRandomGifs,
    searchGifs, 
    searchStickers,
    setActiveTab,
    changeLimit,
    setTitle,
}
