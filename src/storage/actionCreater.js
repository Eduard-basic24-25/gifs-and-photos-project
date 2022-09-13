import { 
    FETCH_GIFS,
    FETCH_SEARCH_GIFS
} from './actions'
import axios from 'axios'



const api = 'https://api.giphy.com/v1/gifs';
const APIKey = 'MGbYYwZn5llmulEU0q07Nyc73DbNUWYE'; 

const addAllGifs = (data) => {
    return {
        type: FETCH_GIFS,
        payload: data,
    }
}

const getAllGifs = () => {
    
    return async (dispatch) => {
        try {
            const response = await axios.get(`${api}/trending?api_key=${APIKey}&limit=3`)
            // const data = await response.json();

            dispatch(addAllGifs(response.data.data.images.downsized.url))
        } catch (err) {
            console.log('Error 404', err.message)
        }
        
    }
    // return function(dispatch)  {
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKey}&limit=3&`;
    //         fetch(url)
    //         .then( response => {
    //             const data = response.data
    //             dispatch(addAllGifs(data))
    //             return response.json()
                
    //         })
    //         .then( content => {
    //             console.log(content.data)
    //             console.log('META', content.meta)
    //         })
    //         .catch( err => {
    //             console.error(err)
    //         })
    //     }
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
            const response = await axios.get(`${api}/search?api_key=${APIKey}&limit=3&q=${searchData}`)
            // const data = await response.json();
            // console.log(response.data.data)
            dispatch(searchGifsData(response.data.data))
        } catch (err) {
            console.log('Error 404', err.message)
        }
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=3&q=${title}`;
    //     axios.get(url)
    //     .then( response => {
    //        return response.json()
    //     })
    //     .then( content => {
    //         console.log(content.data)
    //         console.log('META', content.meta)
    //     })
    //     .catch( err => {
    //         console.error(err)
    //     })
    }
}






export { getAllGifs, addAllGifs,searchGifsData,searchGifs  }
