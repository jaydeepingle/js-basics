import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  // initial render, re-render, destroy the component
  constructor() {
    super();
    console.log('child constructor');
  }
  componentWillMount() {
    console.log('child componentWillMount');
  }

  componentDidMount() {
    console.log('child componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child shouldComponentUpdate');
    return false; // go through the rendering or not
  }

  componentWillUpdate() {
    console.log('child componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    /* setup thirdparty UI elements */
    console.log('child prevProps', prevProps);
    console.log('child prevState', prevState);
    console.log('child componentDidUpdate');
  }

  render() {
    /* Don't call setState in render we may have to rerender the same which can cause the problem 
    Gets called every time we change the state or props */
    console.log('child render');
    return (
      <div className="App">
      childname: {this.props.name}
      </div>
    );
  }
}

export default Child;
