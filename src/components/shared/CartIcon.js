import React, {Component} from 'react';


import {Glyphicon} from 'react-bootstrap';

class CartIcon extends Component {

    _renderIcon(itemCount) {
        if(itemCount) {
            return (
                <div className="text-danger">
                    <Glyphicon glyph="shopping-cart" />
                    <span>&nbsp;{itemCount}</span>
                </div>
            )
        } else {
            return <Glyphicon glyph="shopping-cart" />
        }
    }

    render() {
        return this._renderIcon(this.props.itemCount)
    }
}

CartIcon.propTypes = {};
CartIcon.defaultProps = {};

export default CartIcon;
