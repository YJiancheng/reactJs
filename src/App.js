import React, { Component } from 'react';
import { HashRouter,Route,Routes } from 'react-router-dom';
import './App.scss';
import Home from './views/Home';
import Detail from './views/Detail';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {}
  // }
  render() {
    return(
      <div>
        <div class='red'> 2154154</div>
        <ul>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
        </ul>
        <HashRouter>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/Detail" element={<Detail />} />
          </Routes>
        </HashRouter>
     </div>

    )
  }
}

export default App;
