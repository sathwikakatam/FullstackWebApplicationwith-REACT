import React, { Component } from 'react';
 const getcolor=(value,max,min)=>{
     if(value>max){
         return 'green';
     }
     else if(value<min){
         return 'red';
     }
     else{
         return 'yellow';
     }
 }

class Counter extends Component {
   
    render() {
        return (
        <div>
            <button onClick={()=>this.props.increment(this.props.label)}>+</button>
    <span style={{padding:30,color:getcolor(this.props.value,this.props.max,this.props.min)}}>
      {this.props.label}:  {this.props.value}
        </span>
      <button onClick={()=>this.props.decrement(this.props.label)}>-</button>
        </div>
        );
    }
}
export default Counter;