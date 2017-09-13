import React, {Component} from 'react';
import {connect} from 'react-redux';

import Cart from '../components/cart';

class CartContainer extends Component {
    render() {
        return (
            <Cart items={this.props.items}/>
        );
    }
}

CartContainer.propTypes = {};
CartContainer.defaultProps = {};

const mapStateToProps = ({cart}) => {
    const {items} = cart;
    return {
        items: items.map(item => {
            const {qty, product} = item;
            const {id, name, price} = product;
            return {
                id,
                name,
                price,
                qty,
                amount: price * qty
            }
        })
    }
};

export default connect(mapStateToProps)(CartContainer);
