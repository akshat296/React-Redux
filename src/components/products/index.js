import React, {Component} from 'react';


import ProductsList from './ProductsList'

class Products extends Component {

    _renderLoader() {
        if (this.props.loading) {
            return (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    width: '30em',
                    height: '18em',
                    marginTop: '-9em',
                    marginLeft: '-15em',
                    border: '1px solid #ccc',
                    backgroundColor: '#f3f3f3',
                    zIndex: 9999
                }}>
                    <h1>Adding to Cart</h1>
                </div>
            )
        }
    }

    render() {
        const {products, addToCart} = this.props;
        return (
            <div>
                {this._renderLoader()}
                <ProductsList
                    addToCart={addToCart}
                    products={products}
                />
            </div>
        );
    }
}

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
