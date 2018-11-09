import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './static/css/App.css';
import 'bulma'

class App extends Component {
  render() {
    return (
      <div>
        {/* Including Navigation bar (TOP) */}
        <Navbar/>
      </div>
    );
  }
}

export default App;
