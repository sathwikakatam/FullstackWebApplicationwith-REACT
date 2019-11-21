import React, { Component } from './node_modules/react';
import Input from './Input';

class Number extends Component {

    render() {
        return (
            < input {...this.props} type="number" />

        );
    }
}
export default Number;