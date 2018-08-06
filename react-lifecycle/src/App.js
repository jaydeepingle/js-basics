import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
  // initial render, re-render, destroy the component
  constructor() {
    super();
    this.state = {
      name: "Jaydeep"
    };
    console.log('constructor');
  }
  
  //initial  
  componentWillMount() {
    /* sometimes based on the props you may have to change the state
    run only once
    play global events either with window or document */
    
    if(window.innerWidth > 500) {
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentWillMount');
  }
  //initial
  componentDidMount() {
    /* make an ajax call
    subscriptions
    unsubscribe in componentDidUnmount 
    setState but it would rerender the component*/
    console.log('componentDidMount');
  }

  // re render
  componentWillReceiveProps() {
    /* Glimpse of upcoming state or props
    Could setState here
    Don't change any props here */
    console.log('componentWillReceiveProps');
  }
  
  // re render
  shouldComponentUpdate(nextProps, nextState) {
    /* continue with the update or not */
    console.log('shouldComponentUpdate');
    return true; // go through the rendering or not // because of forceUpdate it won't run
  }

  // re render
  componentWillUpdate() {
    /* set some variables based on props and state
    don't setState
    another componentWillUpdate and infinite loop */
    console.log('componentWillUpdate');
  }
  // re render
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('componentDidUpdate');
  }

  // destroy
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  //re-render
  changeState() {
    this.setState({name: 'JD'});
  }

  unmountChild() {
    this.setState({name:'robert'});
  }

  //initial
  render() {
    /* Don't call setState in render we may have to rerender the same which can cause the problem 
    Gets called every time we change the state or props */
    console.log('render');
    if(this.state.name === 'robert') {
      return(<div></div>);
    } else {
      return (
        <div className="App">
        Name: {this.state.name}  
        | innerWidth: {this.state.innerWidth}
        <Child name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount State</button>
        </div>
      );
    }
  }
}

export default App;
