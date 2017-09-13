import {List} from 'immutable';

const {
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS
} = require('../action/types').default;

const INITIAL_STATE = {
    loading: false,
    catalog: List([
        {
            id: 1,
            name: 'IPhone 7',
            price: 300
        }, {
            id: 2,
            name: 'Samsung S8',
            price: 200
        }, {
            id: 3,
            name: 'Logitech Mouse',
            price: 450
        }, {
            id: 4,
            name: 'LG Monitor',
            price: 340
        }, {
            id: 5,
            name: 'Macbook Pro',
            price: 1200
        }, {
            id: 6,
            name: 'TPLink Router',
            price: 50
        }
    ])
};

export default (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:
            return {...state, loading: true};
        case ADD_TO_CART_SUCCESS:
            return {...state, loading: false};
        default:
            return state;
    }
}