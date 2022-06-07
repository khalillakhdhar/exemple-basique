import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';


import Main from './components/Main';
import Create from './components/create.component';
class App extends Component {
  render() {
    return (
      <Router>
        
        <div>
          <switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/create' component={Create} />
          
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
