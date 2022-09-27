import './~style.scss'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab, getPopularGifs } from '../../../storage/actionCreater'

export const QualityTabs = () => { 

    const dispatch = useDispatch();
    const tab = useSelector(state => state.gifs.tab);

    
    const getPopular = () => {
        dispatch(setActiveTab('Popular'));
        dispatch(getPopularGifs());
    }
    return (
        <div className="container">
            <p 
                className={`latest ${tab === 'Latest' ? 'activeLatest' : ''}`}
                onClick={() => dispatch(setActiveTab('Latest'))}
                >Latest
            </p>
            <p 
                className={`popular  ${tab === 'Popular' ? 'activePopular' : ''}`}
                onClick={getPopular}
                >Popular
            </p>
        </div>
    )
}