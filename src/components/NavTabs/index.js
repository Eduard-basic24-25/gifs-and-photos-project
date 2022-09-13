import './~style.scss'
import  { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllGifs } from '../../storage/actionCreater';

export const NavTabs = () => {

    // const dispatch = useDispatch();

    // const gifs = useSelector(state => state.gifs.gifs);

    // useEffect( () => {
    //     dispatch(getAllGifs());
    // }, []);
    
    return (
        <div className='headerWrapper'>
            <div className='item logo'></div>
            <div className='item'>GIFs</div>
            <div className='item'>Photos</div>
        </div>
    )
}
