import React, {Component} from 'react';

import {Col, Button} from 'react-bootstrap';

class ProductsListItem extends Component {
    render() {
        const {product, addToCart} = this.props;
        return (
            <div>
                <div className="thumbnail">
                    <img src="http://placehold.it/400x250/000/fff" alt={product.name}/>
                    <div>
                        <h4>{product.name}</h4>
                        <div className="row">
                            <Col md={6}>
                                <p className="lead">
                                    ${product.price}</p>
                            </Col>
                            <Col md={6}>
                                <Button onClick={() => addToCart(product)} bsSize="small" bsStyle="success">Add to
                                    cart</Button>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

ProductsListItem.propTypes = {};
ProductsListItem.defaultProps = {};

export default ProductsListItem;
