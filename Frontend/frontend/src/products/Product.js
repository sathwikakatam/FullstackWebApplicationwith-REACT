import React, { Component } from 'react';
import './product.css';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.images[0],

        };
    };
    moveover = () => {
        if (this.props.images.length > 1)
            this.setState({ image: this.props.images[1] });

    }
    moveleave = () => {
        this.setState({ image: this.props.images[0] });
    }
    render() {
        return (
            <div className="productss" style={this.props.pull ? { 'align-items': 'flex-end' } : { 'align-items': "flex-start" }
            }>
                <img src={this.state.image} onMouseOver={this.moveover} onMouseLeave={this.moveleave}></img>
                <h3>{this.props.name}</h3>
                <h6>{this.props.price}</h6>
            </ div >
        );
    };
};

export default Product;