import React, { Component } from 'react'
import products from '../data/products';
import Product from '../products/Product';
import '../App.css';
class Home extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {products.map((products, index) => <Product key={products.id} {...products} pull={index % 2 == 0} />)}
                </header>
            </div>
        );
    }
}
export default Home;