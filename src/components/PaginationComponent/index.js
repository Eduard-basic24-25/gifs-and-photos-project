import './~style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeLimit } from '../../storage/actionCreater';

export const Pagination = () => {

    const dispatch = useDispatch();
    const offset = useSelector(state => state.gifs.offset);
    const title = useSelector(state => state.gifs.title);

    const count = offset / 3; 
    const disabledPrev = !title || offset === 3 ? true : false; 
    const disabledNext = !title ? true : false; 

    const prevPageHandler = () => {
        if(!disabledPrev) dispatch(changeLimit(offset - 3))
    }
    const NextPageHandler = () => {
        if(!disabledNext) dispatch(changeLimit(offset + 3))
    }

    return (

        <div className='pagesContainer'>
            <div className='nextPageWrapper'>
                <button  
                    className={`${disabledNext ? 'disabled' : ''}`}
                    onClick={NextPageHandler} 
                    disabled={disabledNext}
                    >Next Page
                </button>
            </div>
            <div className='pagesWrapper'>
                <span>Page</span>
                <div>
                    <button 
                        className={`prevPage ${disabledPrev ? 'disabled': ''}`}
                        onClick={prevPageHandler}
                        disabled={disabledPrev}
                        >
                    </button>
                    <button className='count'>{count}</button>
                    <button 
                        className={`nextPage ${disabledNext ? 'disabled': ''}`}
                        onClick={NextPageHandler}
                        disabled={disabledNext}
                        >
                        
                    </button>
                </div>
                <span>of 120</span>
            </div>
        </div>
    )
}