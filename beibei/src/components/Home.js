import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Main from './Main';
import Search from './Search';
import List from './List';
import Login from './Login';

import '../style/home.scss';
export default class Home extends Component {
    render (){
        return (
            <div className="home">
                <section className="contentbox">
                    <Route exact path="/" component={Main} />
                    <Route path="/Search" component={Search} />
                    <Route path="/List" component={List} />
                    <Route path="/Login" component={Login} />
                </section>
                <footer>
                    <NavLink exact activeclassname="active" to="/">
                        <i className="iconfont icon-shouye"></i>
                        <p>首页</p>
                    </NavLink>
                    <NavLink activeclassname="active" to="/Search">
                        <i className="iconfont icon-gouwuche"></i>
                        <p>发现</p>
                    </NavLink>
                    <NavLink activeclassname="active" to="/List">
                        <i className="iconfont icon-202"></i>
                        <p>类目</p>
                    </NavLink>
                    <NavLink activeclassname="active" to="/Login">
                        <i className="iconfont icon-iconfontzhizuobiaozhun023104"></i>
                        <p>我的商城</p>
                    </NavLink>
                </footer>
            </div>
        )
    }
}