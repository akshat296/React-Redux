import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Header from '../components/shared/Header';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

import Router from '../Router';

import rootReduces from '../reducers';

const store = createStore(rootReduces, applyMiddleware(thunk, logger));

class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <Router>
                        <Router.Route path="#/products" component={ProductsContainer}/>
                        <Router.Route path="#/cart" component={CartContainer}/>
                    </Router>
                </div>
            </Provider>
        );
    }
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};

export default AppContainer;


