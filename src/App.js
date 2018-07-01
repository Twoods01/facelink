import React, { Component } from 'react';
import { Button, Input } from 'antd';
import FaceBase, { generateFaceCode } from './FaceBase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const inputFaceCode = window.location.pathname.split("/")[1];
    this.state = {
      faceCode: inputFaceCode
    }
  }

  generateCode() {
    this.setState({
      faceCode: generateFaceCode()
    });
  }

  loadCode() {
    this.setState({
      faceCode: document.getElementById("loadFaceInput").value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Button type="primary" onClick={this.loadCode.bind(this)}>Load Face</Button>
          <Input id="loadFaceInput" className="faceCodeInput" type="text" />
        </div>
        <div>
          <Button type="primary" onClick={this.generateCode.bind(this)}>Generate Face</Button>
          <Input className="faceCodeInput" type="text" disabled value={this.state.faceCode} />
        </div>
        {this.state.faceCode !== null && <FaceBase code={this.state.faceCode} />}
      </div>
    );
  }
}

export default App;
