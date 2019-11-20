import React, { Component } from 'react';

import './App.css';
import Counter from "./Components/Counter";

class App extends Component {
   state=
    {
        first:0,
        second:0,
        third:0
    };
 increment=(key)=>{
    
    this.setState({
       [key]:this.state[key]+1
    });
 
};
 decrement=(key)=>{
    
    this.setState({
        [key]:this.state[key]-1
    });
    
};
  render() {
    return (
      <div className="App" >
<div className="App-header">
        <Counter label="first" max={5} min={5} increment={this.increment} decrement={this.decrement} value={this.state.first}/>
        <Counter label="second" max={4} min={4} increment={this.increment} decrement={this.decrement} value={this.state.second}/>
        <Counter label="third" max={3} min={0} increment={this.increment} decrement={this.decrement} value={this.state.third}/>


{
  (
    
    this.state.second<0&&
    this.state.third<0
  )?
  
<p>All are less than 0 </p>:null
  }
  </div>
      </div>
    );
  };
};
export default App;
