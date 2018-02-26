import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

import './style/footer.scss';

import Home from './components/Home';
import Pt from './components/Pt';
import Shops from './components/Shops';
import Cart from './components/Cart';
import Login from './components/Login';
class App extends Component {
  render() {
    return (
      <Router>
        <section>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pt" component={Pt} />
                <Route path="/shops" component={Shops} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
            </Switch>
            <footer>
                <NavLink exact activeclassname="active" to="/">
                    <i className="iconfont icon-icon--"></i>
                    <p>今日热卖</p>
                </NavLink>
                <NavLink activeclassname="active" to="/pt">
                    <i className="iconfont icon-pintuan"></i>
                    <p>拼团</p>
                </NavLink>
                <NavLink activeclassname="active" to="/shops">
                    <i className="iconfont icon-yanjing"></i>
                    <p>逛新品</p>
                </NavLink>
                <NavLink activeclassname="active" to="/cart">
                    <i className="iconfont icon-yingerche"></i>
                    <p>购物车</p>
                </NavLink>
                <NavLink activeclassname="active" to="/login">
                    <i className="iconfont icon-baby"></i>
                    <p>我的</p>
                </NavLink>
            </footer>
        </section>
    </Router>
    );
  }
}

export default App;
