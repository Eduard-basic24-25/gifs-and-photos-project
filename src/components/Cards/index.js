import './~style.scss';

import { QualityTabs } from './QualityTabs';
import { getAllGifs } from '../../storage/actionCreater';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import test from './test.jpg'


export const Cards = () => {

    
    // const dispatch = useDispatch();

    // const gifs = useSelector(state => state.gifs.gifs);
    const gifsResult = useSelector(state => state.gifs.searchGifs)
    // useEffect( () => {
    //     dispatch(getAllGifs(gifs));
    // }, []);



    return (
        <>
            <QualityTabs/>
            <div className="cardsWrapper">
                
                {/* {
                    gifsResult.map(item => {
                        return (
                        <div className="card" key={item.id}>
                            <figure>
                                <img src={item.url} />
                            </figure>
                            <p className="cardName">{item.title}</p>
                            <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                            <button className="download">Download</button>
                        </div>
                            ) 
                    })
                } */}
                <div className="card">
                    <figure>
                        <img src={test} alt="Monkey" />
                    </figure>
                    <p className="cardName">Chotte Unsaad</p>
                    <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                    <button className="download">Download</button>
                </div>
                <div className="card">
                    <figure>
                        <img src="./test.jpg" alt="" />
                    </figure>
                    <p className="cardName">Chotte Unsaad</p>
                    <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                    <button className="download">Download</button>
                </div>
                <div className="card">
                    <figure>
                        <img src="C:\Users\Eduard\OneDrive\Bilder\Desktop\Frontend\Frontend special lecture\REACT\GifsAndPhotosProject\gifs-and-photos-project\src\components\img" alt="Monkey" />
                    </figure>
                    <p className="cardName">Chotte Unsaad</p>
                    <p className="descr">This vector is avaliable in .EPS and .PSD formats.</p>
                    <button className="download">Download</button>
                </div>
            
            </div>
        </>
    )
}