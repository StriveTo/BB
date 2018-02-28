import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import List from './components/List';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="app">
                <Route exact path="/" component={Home} />
                <Route path="/Search" component={Home} />
                <Route path="/Login" component={Home} />
                <Route path="/List" component={List} />
            </div>
        </Router>
    );
  }
}

export default App;
