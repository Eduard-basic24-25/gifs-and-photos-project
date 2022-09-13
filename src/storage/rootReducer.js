import reducer from './reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    gifs: reducer
})

export default rootReducer;