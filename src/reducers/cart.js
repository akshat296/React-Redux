import {List} from 'immutable';

const {
    ADD_TO_CART_SUCCESS
} = require('../action/types').default;

const INITIAL_STATE = {
    items: List([])
};

export default (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART_SUCCESS:
            const existingIndex = state.items.findIndex(({product}) => product.id === payload.id);
            if (existingIndex > -1) {
                const existingItem = state.items.get(existingIndex);
                existingItem.qty += 1;
                return {...state, items: state.items.set(existingIndex, existingItem)}
            } else {
                return {...state, items: state.items.push({product: payload, qty: 1})}
            }
        default:
            return state;
    }
}