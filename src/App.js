import React, { Component } from 'react';
import './App.css';

const Greeting = props => <h1>Hello, {props.name}.</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.title = "Meu primeiro App";
    this.state = { counter: 0 };
  }

  incrementCounter() {
    this.setState({counter: this.state.counter + 1});
  }

  renderClickCount() {
    return <p onClick={(e) => this.incrementCounter()}>Você clicou {this.state.counter} vezes!</p>;
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <br/>
        <Greeting name={this.props.name}/>
        <br/>
        {this.renderClickCount()}
      </div>
    );
  }
}

export default App;
