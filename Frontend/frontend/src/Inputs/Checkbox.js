import React, { Component } from 'react';
import Input from './Input';

class Checkbox extends Component {

    render() {
        return (
            <Input {...this.props} type="checkbox" />

        );
    }
}
export default Checkbox;