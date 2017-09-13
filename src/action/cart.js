const {
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS
} = require('./types').default;

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: item
        });
        setTimeout(function () {
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: item
            });
        }, 1000);
    };
};