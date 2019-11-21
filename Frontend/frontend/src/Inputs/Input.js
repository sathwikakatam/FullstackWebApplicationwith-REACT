import React, { Component } from 'react';

import './Inputs.css';
class Input    extends Component {

    render() {
        return (
           
            <div className={`Input ${this.props.type=='checkbox'? 'BaseInputReverse':''}`}>
            <label htmlFor={this.props.name}>{this.props.label||" "}</label>

          <input  id={this.props.name} {...this.props}></input>
          
</div>
        )
    }
}
export default Input;