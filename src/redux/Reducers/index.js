import {combineReducers} from 'redux';
import {reducer} from './cart_reducer';

const reducerss = combineReducers({
    product_list : reducer
})

export default reducerss