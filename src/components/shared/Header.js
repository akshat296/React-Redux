import React, {Component} from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

import {connect} from 'react-redux';

import CartIcon from './CartIcon';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            cartBackground: 'yellow'
        }
    }

    componentDidMount() {
        this.setState((state) => {
            return {...state, cartBackground: null}
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState((state) => {
            return {...state, cartBackground: 'yellow'}
        });
        setTimeout(() => {
            this.setState((state) => {
                return {...state, cartBackground: null}
            });
        }, 500);
    }


    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#/products">E Store</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href="#/products" eventKey={1}>Products</NavItem>
                </Nav>
                <Nav bsClass="nav navbar-right">
                    <NavItem style={{backgroundColor: this.state.cartBackground}} href="#/cart" eventKey={2}><CartIcon
                        itemCount={this.props.cartItemCount}/></NavItem>
                </Nav>
            </Navbar>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default connect(({cart}) => {
    return {
        cartItemCount: cart.items.size,
        totalItems: (function(){
            return cart.items.reduce((acc, item) => {
                return acc + item.qty;
            }, 0);
        })(cart.items)
    }
})(Header);
