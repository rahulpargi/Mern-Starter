import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  state={
    text:''
  }

  componentDidMount(){
    axios.get('/api')
    .then(res=>this.setState({text:res.data}))
    
    
  }
  render() {
    return (
      <div className="App">
      <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
