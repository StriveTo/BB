import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import Sub from './components/Sub';
import Find from './components/Find';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="app">
                <Route exact path="/" component={Home} />
                <Route path="/Search" component={Home} />
                <Route path="/Login" component={Home} />
                <Route path="/List" component={List} />
                <Route path="/detail/:name" component={Detail} />
                <Route path="/sub/:id" component={Sub} />
                <Route path="/find" component={Find} />
            </div>
        </Router>
    );
  }
}

export default App;
