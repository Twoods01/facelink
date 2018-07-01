import React, { Component } from 'react';
import { Button } from 'antd';
import FaceBase from './FaceBase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceCode: null
    }
  }

  generateCode() {
    this.setState({
      faceCode: Math.random()
    });
  }

  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.generateCode.bind(this)}>Generate Face</Button>
        <br />
        {this.state.faceCode && <FaceBase code={this.state.faceCode} />}
      </div>
    );
  }
}

export default App;
