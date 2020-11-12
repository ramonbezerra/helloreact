import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props);
        console.log("Test Constructor");
    }

    componentWillUnmount() {
        console.log("component Will Unmount");
    }

    render() {
        return <p>I only show up if the conditional is true!</p>;
    }
}