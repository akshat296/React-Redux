import React, {Component} from 'react';

class Cart extends Component {

    _renderCartItems(items) {
        return items.map(item => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.amount}</td>
                <td>
                    <button className="btn btn-danger btn-xs">Delete</button>
                </td>
            </tr>
        ))
    }


    render() {
        const {items} = this.props;
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Qty</td>
                    <td>Amount</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {this._renderCartItems(items)}
                </tbody>
            </table>
        );
    }
}

Cart.propTypes = {};
Cart.defaultProps = {};

export default Cart;
