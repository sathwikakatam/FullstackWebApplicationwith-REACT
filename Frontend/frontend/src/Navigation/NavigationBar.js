import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css';
class NavigationBar extends Component {

    render() {
        const { isLogged } = this.props;
        return (
            <div className="NavigationBar">
                <Link to="/">Home</Link>
                <Link to="/category/sporty">#tshits</Link>
                <Link to="/category/tshirt">#tshits</Link>
                <Link to="/category/jackets">#jackets</Link>
                <Link to="/category/sneakers">#sneakers</Link>
                <Link to="/category/boots">#boots</Link>
                {isLogged ?
                    <Fragment>
                        <Link to="/cart">My Cart</Link>
                        <Link to="/order">Orders</Link>
                    </Fragment>
                    :

                    <Link to="/account">Account</Link>
                }
            </div>

        );
    }
}
export default NavigationBar;