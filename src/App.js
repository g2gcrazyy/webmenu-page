import React, { useState, useEffect } from "react";
import Cart from './components/Cart';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/pages/Home'
import ProductInfo from './components/pages/ProductInfo';
import CheckoutPage from './components/pages/CheckoutPage';
import CartPage from './components/pages/CartPage';
import CategoryPage from './components/pages/CategoryPage';

function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/category' exact component= {CategoryPage} />
          <Route path='/home/:type/:filter/:brand/:sort' exact component= {Home} />
          <Route path='/home/:type/:filter/:brand' exact component= {Home} />
          <Route path='/home/:type/:filter' exact component= {Home} />
          <Route path='/home/:type' exact component= {Home} />
          <Redirect exact from="/home" to="/home/All" />
          <Redirect exact from="/" to="/home/All" />
          <Route path='/product/:productId' component= {ProductInfo} />
          <Route path='/checkout' component= {CheckoutPage} />
          <Route path='/cart' component= {CartPage} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
