import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../action/cart';

import Products from '../components/products';

class ProductsContainer extends Component {
    render() {
        return (
            <Products
                products={this.props.products}
                loading={this.props.loading}
                addToCart={this.props.addToCart}
            />
        );
    }
}

ProductsContainer.propTypes = {};
ProductsContainer.defaultProps = {};

const mapStateToProps = ({products}) => {
    const {catalog, loading} = products;
    return {
        products: catalog.toArray(),
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addToCart(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
