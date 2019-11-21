import React, { Component } from 'react'
import './form.css';

class Forms extends Component {

    render() {
        return (
            <div className='Form'>
                <form onSubmit={this.props.onSubmit}>
                    {this.props.children}

                </form>
            </div>
        );
    }
}
export default Forms;