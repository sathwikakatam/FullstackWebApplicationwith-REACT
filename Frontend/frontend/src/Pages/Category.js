import React, { Component } from 'react'


class Category extends Component {

    render() {
        return (
            <div>
                {console.log(this.props)}
                <h1>Category:{this.props.match.params.slug}</h1>
            </div>

        );
    }
}
export default Category;