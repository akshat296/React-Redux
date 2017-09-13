import {combineReducers} from 'redux';

export default combineReducers({
    products: require('./products').default,
    cart: require('./cart').default
});