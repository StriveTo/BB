import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import His from './History';
import Li from './Li';
import Ss from './Ss';

import '../style/find.scss';

export default class Find extends Component {
    constructor (props){
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount(){
        axios.get("/mo_bile/index.php?act=index&op=search_key_list")
        .then((res)=>{
            console.log(res);
            this.setState({
                list: res.data.datas.list
            })
        })
    }
    render (){
        return (
            <div className="find">
                <header>
                    <a href="javascript:history.go(-1)">
                        <i className="iconfont icon-zuojiantou"></i>
                    </a>    
                    
                    <Ss />
                    {/* <p onClick={this.toFind}>搜索</p> */}
                </header>
                <section>
                    <dl>
                        <dt>热门搜索</dt>
                        <dd>
                            <ul>
                            {
                                this.state.list.map((item,index)=>{
                                    return (
                                        <Li key={index} LiItem={item}/>
                                    )
                                })
                            }    
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>历史记录</dt>
                        <His />
                    </dl>
                    <div className="clear">
                        清空历史
                    </div>
                </section>
                <footer className="footer">
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