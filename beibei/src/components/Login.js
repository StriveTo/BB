import React, { Component } from 'react';

import '../style/login.scss';
export default class Login extends Component {
    constructor (props){
        super(props);
    }
    render (){
        return (
            <div className="login">
                <div className="head">
                    <div>
                        <i className="iconfont icon-shezhi"></i>
                    </div>
                        <h2>我的商城</h2>
                    <i className="iconfont icon-shixincaidan"></i>
                </div>
                <div className="top">
                    <header>
                        <div>
                            <i className="iconfont icon-shezhi"></i>
                        </div>
                        <i className="iconfont icon-shixincaidan"></i>
                    </header>
                    <div className="myinfo">
                        <div className="imgSrc">
                            <img src="http://www.hangowa.com/data/upload/shop/common/default_user_portrait.gif" alt=""/>
                        </div>
                        <div className="phone">
                            <span>1861409501<em>V3</em></span>
                        </div>
                    </div>
                    <ul className="collect">
                        <li>
                            <span>0</span>
                            <p>商品推荐</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p>店铺推荐</p>
                        </li>
                        <li>
                            <span><i className="iconfont icon-zuji"></i></span>
                            <p>我的足迹</p>
                        </li>
                    </ul>
                </div>
                <div className="order">
                    <div className="order-con">
                        <h2>
                            <i className="iconfont icon-dingdan"></i>
                            我的订单
                        </h2>
                        <span>
                            查看全部订单
                            <i className="iconfont icon-youjiantou1"></i>
                        </span>
                    </div>
                    <ul className="orders">
                        <li>
                            <i className="iconfont icon-daifukuan"></i>
                            <p>待付款</p>
                        </li>
                        <li>
                            <i className="iconfont icon-daiqubaoguo"></i>
                            <p>待收货</p>
                        </li>
                        <li>
                            <i className="iconfont icon-daishouhuo"></i>
                            <p>待自提</p>
                        </li>
                        <li>
                            <i className="iconfont icon-qdao"></i>
                            <p>待评价</p>
                        </li>
                        <li>
                            <i className="iconfont icon-icon5"></i>
                            <p>退款/退货</p>
                        </li>
                    </ul>
                </div>
                <div className="assets">
                    <div className="order-con">
                        <h2>
                            <i className="iconfont icon-qianbao"></i>
                            我的财产
                        </h2>
                        <span>
                            查看全部财产
                            <i className="iconfont icon-youjiantou1"></i>
                        </span>
                    </div>
                    <ul className="orders">
                        <li>
                            <i className="iconfont icon-daifukuan"></i>
                            <p>预存款</p>
                        </li>
                        <li>
                            <i className="iconfont icon-daiqubaoguo"></i>
                            <p>充值卡</p>
                        </li>
                        <li>
                            <i className="iconfont icon-daishouhuo"></i>
                            <p>代金券</p>
                        </li>
                        <li>
                            <i className="iconfont icon-qdao"></i>
                            <p>红包</p>
                        </li>
                        <li>
                            <i className="iconfont icon-icon5"></i>
                            <p>积分</p>
                        </li>
                    </ul>
                </div>
                <ul className="manage">
                    <li>
                        <p>
                            <i className="iconfont icon-yingyongicon_huaban"></i>
                            <span>我的分销管理</span>
                        </p>
                        <i className="iconfont icon-youjiantou1"></i>
                    </li>
                    <li>
                        <p>
                            <i className="iconfont icon-genggaishouhuodizhi"></i>
                            <span>我的地址管理</span>
                        </p>
                        <i className="iconfont icon-youjiantou1"></i>
                    </li>
                    <li>
                        <p>
                            <i className="iconfont icon-shezhi3"></i>
                            <span>用户设置</span>
                        </p>                       
                        <i className="iconfont icon-youjiantou1"></i>
                    </li>
                </ul>
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
            </div>
        )
    }
}