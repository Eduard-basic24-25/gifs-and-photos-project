import './~style.scss'
import  { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import {  getRandomPhotos, getRandomGifs, setActiveTab } from '../../storage/actionCreater';

export const NavTabs = () => {

    const dispatch = useDispatch();

    const randomGifs = useSelector(state => state.gifs.randomGifs)

    const tab = useSelector(state => state.gifs.tab);
    
    const gifsTabBtn = () => {
        dispatch(setActiveTab('Gifs'))
        dispatch(getRandomGifs(randomGifs))
    }

    const photosTabBtn = () => {
        dispatch(setActiveTab('Photos'))
        dispatch(getRandomPhotos())
    }

    
    return (
        <div className='headerWrapper'>
            <div 
                className='item logo'
                onClick={() => window.open('https://http.cat/400')}
            >
              {/* <a href="https://http.cat/400" blank>Icon</a> */}
            </div>
            <div 
                className={`item ${tab === 'Gifs' ? 'activeGifs' : ''}`}
                onClick={gifsTabBtn}   
                >GIFs
            </div>
            <div 
                className={`item ${tab === 'Photos' ? 'activePhotos' : ''}`}
                onClick={photosTabBtn}
                >Photos
            </div>
        </div>
    )
}
