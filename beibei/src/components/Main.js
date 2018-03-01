import React, { Component } from 'react';
import BackTop from 'antd/lib/back-top';
import axios from 'axios';

import '../style/main.scss';

export default class Main extends Component {
    constructor (props){
        super(props);
        this.state = {
            banner: {},
            list: []
        }

        this.gotoSub = this.gotoSub.bind(this);
    }
    gotoSub(){
        window.location="http://www.hangowa.com/wap/special.html?special_id=28";
    }
    componentDidMount(){
        axios.get("/mo_bile/index.php?act=index")
        .then((res)=>{
            // console.log(res);
            // console.log(res.data.datas.list[0].adv_list.item[0]);
            // console.log(res.data.datas.list.slice(1));

            this.setState({
                banner: res.data.datas.list[0].adv_list.item[0].image,
                list: res.data.datas.list.slice(1)
            })
        })
    }
    render (){
        return (
            <div className="main">
                <BackTop visibilityHeight="200">
                    <div className="zd">
                        <i className="iconfont icon-huojian"></i>
                    </div>
                </BackTop>
                <header>
                    <img src="http://www.hangowa.com/wap/images/home_logo.png" alt=""/>
                    <div className="srh">
                        <i className="iconfont icon-sousuo"></i>
                    </div>
                    <div className="car">
                        <i className="iconfont icon-gouwuche"></i>
                    </div>
                </header>
                <section>
                    <div onClick={this.gotoSub} className="banner">
                        <img src={this.state.banner} alt=""/>
                    </div>
                    <ul className="label">
                        <li>
                            <div style={{background: "#FB6E52"}}>
                                <i className="iconfont icon-202"></i>
                            </div>
                            <p>分类</p>
                        </li>
                        <li>
                            <div style={{background: "#48CFAE"}}>
                                <i className="iconfont icon-gouwuche"></i>
                            </div>
                            <p>购物车</p>
                        </li>
                        <li>
                            <div style={{background: "#4FC0E8"}}>
                               <i className="iconfont icon-iconfontzhizuobiaozhun023104"></i> 
                            </div>
                            <p>我的商城</p>
                        </li>
                        <li>
                            <div style={{background: "#AC92ED"}}>
                                <i className="iconfont icon-qdao"></i>
                            </div>
                            <p>每日签到</p>
                        </li>
                    </ul>
                    <div className="newList">
                        {
                            this.state.list.map((value,index)=>{
                                return (
                                    <div className="lists" key={value.goods.title}>
                                        <h2>{value.goods.title}</h2>
                                        <h3>--  小编为你推荐以下产品  --</h3>
                                        <ul className="tle">
                                            {
                                                value.goods.item.map((item, index)=>{
                                                    return (
                                                        <li key={item.goods_id}>
                                                            <img src={item.goods_image} alt=""/>
                                                            <p>{item.goods_name}</p>
                                                            <span>￥{item.goods_promotion_price}</span>
                                                        </li>
                                                    )
                                                })
                                             }        
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="foot">
                        <ul>
                            <li>
                                <em>我的商城</em>
                            </li>
                            <li>
                                <em>注销</em>
                            </li>
                            <li>
                                <em>反馈</em>
                            </li>
                            <li>
                                <em>返回顶部</em>
                            </li>
                        </ul>
                        <div className="edt">
                            <p>
                                <i className="iconfont icon-bangzhushouji"></i>
                                <span>客户端</span>
                            </p>
                            <p>
                                <i style={{color: "#333"}} className="iconfont icon-shoujirenzheng"></i>
                                <span style={{color: "#333"}}>触屏版</span>
                            </p>
                            <p>
                                <i className="iconfont icon-diannaoban"></i>
                                <span>电脑版</span>
                            </p>
                        </div>
                        <h2>Copyright&nbsp;©&nbsp;2014-2016 汉购网hangowa.com版权所有</h2>
                    </div>
                </section>
            </div>
        )
    }
}