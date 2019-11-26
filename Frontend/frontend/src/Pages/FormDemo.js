import React, { Component } from 'react'
import Forms from '../Form/Forms';
import PrimaryButton from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textfield from '../Inputs/Textfiled';
import Password from '../Inputs/Password';
import Checkbox from '../Inputs/Checkbox';



class FormDemo extends Component {

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
        return (
            <div>

                <Forms onSubmit={this.handleSubmit}>
                    <Textfield label="First Name" value={this.state.FirstName} name="FirstName" onChange={this.changehandle} />
                    <Textfield label="Second Name" value={this.state.LastName} name="LastName" onChange={this.changehandle} />
                    <Password label="Passowrd" value={this.state.password} name="password" onChange={this.changehandle} />
                    <Checkbox label="send email ?" checked={this.state.checked} name="sendemail" onChange={this.changeChecked} />
                    <PrimaryButton type='submit' onSubmit={this.handleSubmit} style={{ marginLeft: '10em', padding: '20px 30px 20px 30px', fontSize: '20px' }}>Submit</PrimaryButton>

                </Forms>
            </div>

        );
    }
}
export default FormDemo;