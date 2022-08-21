import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      console.log('CONSTRUCTOR!') 
      this.state = {
          messageB1:"Default Message B - 1",
          messageB2:"Default Message B - 2",
      }
  }
 
  componentWillMount() { 
      console.log('COMPONENT WILL MOUNT!') 
  } 
  
  componentDidMount() { 
      console.log('COMPONENT DID MOUNT!') 
  } 
 
  b1OnClick = () =>{
      this.setState({
          messageB1:"B-1 Button Clicked :)"
      })
  }
  b2OnClick = () =>{
      this.setState({
          messageB2:"B-2 Button Clicked :)"
      })
  }
 
  render() {
      console.log('RENDER!') 
      return <div><h1>{this.props.message}</h1>
          <h1>{this.state.messageB1}</h1>
          <h1>{this.state.messageB2}</h1>
          <button onclick="{this.b1OnClick}">B1 Button</button>
          <button onclick="{this.b2OnClick}">B2 Button</button>
      </div>
  }
}

export default App;
