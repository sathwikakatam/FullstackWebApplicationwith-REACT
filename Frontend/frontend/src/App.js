
//import product1 from './products/images/product1.png';
//import product2 from './products/images/product2.jpg';
//import Product from './products/Product';
import React, { Component } from 'react';


import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//import products from './data/products';
//import Input from  './Inputs/Input';
import FormDemo from './Pages/FormDemo';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Cart from './Pages/Cart';
import Account from './Pages/Account';
import Orders from './Pages/Orders';
import Category from './Pages/Category';
import NavigationBar from './Navigation/NavigationBar';

class App extends Component {
  render() {
    // console.log(this.state);
    return (

      <Router>
        <div className="App">
          <header className="App-header">
            <NavigationBar isLogged={true} />

            <Switch>

              <Route path="/" exact component={Home}></Route>
              <Route path="/cart" exact component={Cart}></Route>
              <Route path="/orders" exact component={Orders}></Route>
              <Route path="/account" exact component={Account}></Route>
              <Route path="/category/:slug" exact component={Category}></Route>
              <Route path="/forms" exact component={FormDemo}></Route>
              <Route component={PageNotFound}></Route>

            </Switch>
          </header>
        </div>
      </Router>




    );
  };
};

export default App;
