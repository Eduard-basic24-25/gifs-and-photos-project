import './~style.scss';

import { QualityTabs } from './QualityTabs';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getRandomGifs } from '../../storage/actionCreater';
import PuffLoader from "react-spinners/PuffLoader";



export const Cards = () => {

    
    const dispatch = useDispatch();

    const randomGifs = useSelector(state => state.gifs.randomGifs);
    const gifsResult = useSelector(state => state.gifs.searchGifs);
    const stickersResult = useSelector(state => state.gifs.searchStickers);
    const randomPhotos = useSelector(state => state.gifs.randomPhotos);
    const popularGifs = useSelector(state => state.gifs.popularGifs);

    const tab = useSelector(state => state.gifs.tab);
    const loading = useSelector(state => state.gifs.isLoading);
    const limit = useSelector(state => state.gifs.limit);

    
    console.log(gifsResult)

    useEffect( () => {     
       dispatch(getRandomGifs());
    }, []);

    const [gifsResultState, setGifsResultState] = useState(gifsResult)
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(3);
    const [pageCount, setPageCount] = useState(0);

    const slice = gifsResult.slice(offset, offset + perPage);
    // setGifsResultState(slice);
    // setPageCount(Math.ceil(gifsResult.lenght / perPage));



    return (
        <>
            <QualityTabs/>
            <div className="cardsWrapper">

                {
                  tab === 'SearchGifs' 
                    ? gifsResult.map(item => {
                        return (
                            <div className="card" key={item.id}>
                                {
                                    loading ? <PuffLoader color={'#605f63'} loading={loading} size={230}/> 
                                    :
                                    <>
                                        <figure>
                                            <img src={item.images.downsized.url} />
                                        </figure>
                                        <p className="cardName">{item.username}</p>
                                        <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                                        <button className="download">Download</button>
                                    </>
                                }
                            </div>
                            ) 
                    })
                    : tab === 'SearchStickers' 
                      ? stickersResult.map(item => {
                        return (
                            <div className="card" key={item.id}>
                                {
                                    loading ? <PuffLoader color={'#605f63'} loading={loading} size={230}/> 
                                    :
                                    <>
                                        <figure>
                                            <img src={item.images.downsized.url} />
                                        </figure>
                                        <p className="cardName">{item.username}</p>
                                        <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                                        <button className="download">Download</button>
                                    </>
                                }
                            </div>
                            ) 
                    })
                    : tab === 'Photos'
                        ? randomPhotos.map(item => {
                            return (
                                <div className="card" key={item.id}>
                                    {
                                        loading 
                                        ? <PuffLoader color={'#605f63'} loading={loading} size={230}/> 
                                        : <>
                                            <figure>
                                                <img src={item.data.image} />
                                            </figure>
                                            <p className="cardName">{item.username}</p>
                                            <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                                            <button className="download">Download</button>
                                          </>
                                    }
                                </div>
                                ) 
                        }) 
                    : tab === 'Gifs'  
                        ? randomGifs.map(item => {
                            return (
                                <div className="card" key={item.id}>
                                     {
                                        loading ? <PuffLoader color={'#605f63'} loading={loading} size={230}/> 
                                        : <>
                                            <figure>
                                                <img src={item.images.downsized.url} />
                                            </figure>
                                            <p className="cardName">{item.username}</p>
                                            <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                                            <button className="download">Download</button>
                                          </>
                                }
                                </div>
                                ) 
                        }) 
                    :  tab === 'Popular'
                        ? popularGifs.map(item => {
                            return (
                                <div className="card" key={item.id}>
                                    {
                                    loading ? <PuffLoader color={'#605f63'} loading={loading} size={230}/> 
                                    :
                                    <>
                                        <figure>
                                            <img src={item.images.downsized.url} />
                                        </figure>
                                        <p className="cardName">{item.username}</p>
                                        <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                                        <button className="download">Download</button>
                                    </>
                                }
                                </div>
                                ) 
                        }) 
                    : randomGifs.map(item => {
                            return (
                                <div className="card" key={item.id}>
                                    {
                                    loading ? <PuffLoader color={'#605f63'} loading={loading} size={230}/> 
                                    :
                                    <>
                                        <figure>
                                            <img src={item.images.downsized.url} />
                                        </figure>
                                        <p className="cardName">{item.username}</p>
                                        <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                                        <button className="download">Download</button>
                                    </>
                                }
                                </div>
                                ) 
                        }) 
                
               
                    
                } 
            </div>
        </>
    )
}