import React, { Component } from 'react';
import { Button, Input } from 'antd';
import FaceBase, { generateFaceCode } from './FaceBase';
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
      faceCode: generateFaceCode()
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Button type="primary" onClick={this.generateCode.bind(this)}>Generate Face</Button>
          <Input className="faceCodeInput" type="text" disabled value={this.state.faceCode} />
        </div>
        <br />
        {this.state.faceCode !== null && <FaceBase code={this.state.faceCode} />}
      </div>
    );
  }
}

export default App;
