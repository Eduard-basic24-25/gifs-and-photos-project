import './~style.scss';

export const Pagination = () => {

    return (

        <div className='pagesContainer'>
            <div className='nextPageWrapper'>
                <button>Next Page</button>
            </div>
            <div className='pagesWrapper'>
                <span>Page</span>
                <div>
                    <button className='prevPage'></button>
                    <button className='count'>1</button>
                    <button className='nextPage'></button>
                </div>
                <span>of 120</span>
            </div>
        </div>
    )
}