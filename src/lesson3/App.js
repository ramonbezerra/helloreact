import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            theme: "light",
            username: '',
            password: '',
            passwordConfirmation: '',
            email: '',
            errors: []
        }
    }

    toogleTheme = () => {
        const theme = this.state.theme === "light" ? "dark" : "light";
        this.setState({ theme });
    }

    validateNotEmpty(fieldName, value) {
        let errors = this.state.errors;
        const message = `${fieldName} must be filled out`;

        if (value.length <= 0) {
            if (!errors.includes(message)){
                errors.push(message);
            }
        } else {
            errors = errors.filter((item) => item !== message);
        }

        return errors;

    }

    validateEmailFormat(fieldName, value) {
        let [lhs, rhs] = value.split('@');
        lhs = lhs || '';
        rhs = rhs || '';

        let errors = this.validateNotEmpty(fieldName, value);
        const message = `${fieldName} must be in a standard email format`;
        if (lhs.length <= 0 || rhs.length <= 0) {
            if (!errors.includes(message)) {
                errors.push(message);
            }
        } else {
            errors = errors.filter((item) => item !== message);
        }
        return errors;
    }

    validatePassword(fieldName, value) {
        let errors = this.state.errors;
        const message = `${fieldName} must be longer than 4 characters`;

        if (value.length < 5) {
            if (!errors.includes(message)) {
                errors.push(message);
            }
        } else {
            errors = errors.filter((item) => item !== message);
        }
        return errors;
    }

    validatePasswordConfirmation(fieldName, value) {
        let errors = this.state.errors;
        const message = `${fieldName} must match password`;

        if (value !== this.state.password) {
            if (!errors.includes(message)) {
                errors.push(message);
            }
        } else {
            errors = errors.filter((item) => item !== message);
        }
        return errors;
    }

    validateUsernameOnBlur = (event) => {
        const username = event.target.value;
        const errors = this.validateNotEmpty("username", username);
        this.setState({ username, errors });
    }

    validateEmailOnBlur = (event) => {
        const email = event.target.value;
        const errors = this.validateEmailFormat("email", email);
        this.setState({email, errors});
    }

    validatePasswordOnBlur = (event) => { 
        const password = event.target.value;
        const errors = this.validatePassword("password", password);
        this.setState({password, errors});
    }

    validatePasswordConfirmationOnBlur = (event) => {
        const passwordConfirmation = event.target.value;
        const errors = this.validatePasswordConfirmation("passwordConfirmation", passwordConfirmation);
        this.setState({passwordConfirmation, errors});
    }

    submitForm(event) {
        console.log("Submitting the form now...");
        console.log(event);
    }

    displayForm() {
        return (
            <div>
                Username: <input type="text" onBlur={this.validateUsernameOnBlur} /><br/>
                Email: <input type="text" onBlur={this.validateEmailOnBlur}/><br/>
                Password: <input type="password" onBlur={this.validatePasswordOnBlur}/><br/>
                Password Confirmation: <input type="password" onBlur={this.validatePasswordConfirmationOnBlur}/><br/>
                <br/>
                <button onClick={this.submitForm}>Submit</button>
            </div>
        );
    }

    displayErrors() {
        return (
            <div className="errors">
                {this.state.errors.map((err, i) => <p key={`err-${i}`}>{err}</p>)}
            </div>
        );
    }

    render() {
        return (
            <div className={`${this.state.theme}-theme`}>
                <div className="jumbotron">
                    <div className="container">
                        <p>
                            <button onClick={this.toogleTheme} className="btn btn-primary btn-lg">Switch Theme</button>
                        </p>                        
                        <hr/>
                        {this.displayErrors()}
                        <hr/>
                        {this.displayForm()}
                    </div>
                </div>
            </div>
        );
    }
}