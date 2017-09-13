import React, {Component} from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import ProductsListItem from './ProductsListItem';

class ProductsList extends Component {

    _renderProducts(products) {
        return products.map(product => {
           return (
               <Col key={product.id} md={3}>
                   <ProductsListItem addToCart={this.props.addToCart} product={product}/>
               </Col>
           )
        });
    }

    render() {
        const {products} = this.props;
        return (
            <Grid>
                <Row>
                    {this._renderProducts(products)}
                </Row>
            </Grid>
        );
    }
}

ProductsList.propTypes = {};
ProductsList.defaultProps = {};

export default ProductsList;
