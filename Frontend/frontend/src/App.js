
//import product1 from './products/images/product1.png';
//import product2 from './products/images/product2.jpg';
//import Product from './products/Product';
import React, { Component } from 'react';
import PrimaryButton from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import products from './data/products';
//import Input from  './Inputs/Input';
import Forms from './Form/Forms';
import Textfield from './Inputs/Textfiled';
import Password from './Inputs/Password';
import Checkbox from './Inputs/Checkbox';
class App extends Component {
  // const images = [
  //   product1, product2
  // ];
  state = {
    FirstName: "",
    LastName: "",
    password: "",
    sendemail: true
  };
  changehandle = e => {

    this.setState({ [e.target.name]: e.target.value });

  };
  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault()
  }
  changeChecked = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          {/* {products.map((products, index) => <Product key={products.id} {...products} pull={index % 2 == 0} /> */}
          <Forms onSubmit={this.handleSubmit}>
            <Textfield label="First Name" value={this.state.FirstName} name="FirstName" onChange={this.changehandle} />
            <Textfield label="Second Name" value={this.state.LastName} name="LastName" onChange={this.changehandle} />
            <Password label="Passowrd" value={this.state.password} name="password" onChange={this.changehandle} />
            <Checkbox label="send email ?" checked={this.state.checked} name="sendemail" onChange={this.changeChecked} />
            <PrimaryButton type='submit' onSubmit={this.handleSubmit} style={{ marginLeft: '10em', padding: '20px 30px 20px 30px', fontSize: '20px' }}>Submit</PrimaryButton>

          </Forms>
        </header>
      </div >
    );
  };
};

export default App;
