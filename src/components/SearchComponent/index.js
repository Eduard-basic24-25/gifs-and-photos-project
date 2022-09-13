import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchGifs } from '../../storage/actionCreater';
import './~style.scss'

export const SearchComponent = () => {

    const api = 'https://api.giphy.com/v1/gifs';
    const APIKey = 'MGbYYwZn5llmulEU0q07Nyc73DbNUWYE'; 

    const dispatch = useDispatch();
    const gifsResult = useSelector(state => state.gifs.searchGifs);
    const [title, setTitle] = useState('')


    function Search (event) {
        event.preventDefault()
        dispatch(searchGifs(title))
        setTitle('')
    }


    return (
        <div className="searchContainer">
            <h2>Search for images and GIFs</h2>
            <p>Pictures and GIFs for personal use.</p>
            <div className="searchInput">
                <form onSubmit={Search}>
                <input 
                    type="search" 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder='Search...' 
                />
                <select className="select">
                    <option value="GIFs">GIFs</option>
                    <option value="Photos">Photos</option>
                </select>
                </form>
            </div>
            
        </div>
    )
}