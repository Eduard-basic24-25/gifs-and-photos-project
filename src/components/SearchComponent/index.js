import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchGifs, searchStickers, setActiveTab, setTitle } from '../../storage/actionCreater';
import './~style.scss'

export const SearchComponent = () => {

    const dispatch = useDispatch();

    const title = useSelector(state => state.gifs.title);

    // const [title, setTitle] = useState(inputTitle)
    const [select, setSelect] = useState('')
    const tab = useSelector(state => state.gifs.tab);
    const offset = useSelector(state => state.gifs.offset);
    



    function search (event) {
        if(event)  event.preventDefault()
       
        if(select === 'SearchGifs') {
            dispatch(searchGifs({query:title, offset}))
            dispatch(setActiveTab('SearchGifs'))
        } else {
            dispatch(searchStickers({query:title, offset}))
            dispatch(setActiveTab('SearchStickers'))

        }
        
    }
    useEffect( () => {
        if(title) search()
    },[offset]);
    

    return (
        <div className='searchContainer'>
            <h2>Search for images and GIFs</h2>
            <p>Pictures and GIFs for personal use.</p>
            <div className="searchInput">
                <form onSubmit={search}>
                <input 
                    type="search" 
                    value={title}
                    onChange={(event) => dispatch(setTitle(event.target.value))}
                    placeholder='Search...' 
                />
                <select 
                    className="select" 
                    onChange={(e) => setSelect(e.target.value)}
                    defaultValue=''
                >
                    <option value='' disabled hidden >Options</option>
                    <option value="SearchGifs">GIFs</option>
                    <option value="SearchStickers">Stickers</option>
                </select>
                </form>
            </div>
            
        </div>
    )
}