import React, { Component } from 'react';
import './HelloWorld.css';



class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello',
    number: 5 };
    this.frenchify = this.frenchify.bind(this);
    this.increaseNum = this.increaseNum.bind(this);
  }

  render () {
    return (<div className="HelloWorld">
    {this.state.greeting} {this.props.name}!, {this.state.number}
    <br/>
      <button onClick={this.frenchify}>Frenchify!</button>
      <button onClick={this.increaseNum}>Increase!</button>
  </div>);
  }

  frenchify() {
    this.setState({greeting: 'Bonjour!'});
  }

  increaseNum(){
    this.setState({number: 6})
  }

}

export default HelloWorld;
