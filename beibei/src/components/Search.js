import React, { Component } from 'react';
import axios from 'axios';

import Carousel from "antd/lib/carousel"
// import Popover from 'antd-mobile/lib/popover';
// import NavBar from 'antd-mobile/lib/nav-bar';
// import Icon from 'antd-mobile/lib/icon';

import '../style/search.scss';

export default class Search extends Component {
    constructor (props){
        super(props);
        this.state={
            swiper: [],
            img1: [],
            img2: [],
            list: [],
            visible: true,
            selected: ''
        };
        // onSelect = (opt) => {
        //     // console.log(opt.props.value);
        //     this.setState({
        //         visible: false,
        //         selected: opt.props.value,
        //     });
        // };
        // handleVisibleChange = (visible) => {
        //     this.setState({
        //         visible,
        //     });
        // }
    }
    componentDidMount(){
        axios.get("/mo_bile/index.php?act=index&op=special&special_id=1")
        .then((res)=>{
            // console.log(res);
            // console.log(res.data.datas.list[0].adv_list.item);
            // console.log(res.data.datas.list.slice(3));
            this.setState({
                swiper: res.data.datas.list[0].adv_list.item,
                img1: res.data.datas.list[1].explode3.item,
                img2: res.data.datas.list[2].home3.item,
                list: res.data.datas.list.slice(3)
            })
        })
    }    
    render (){
        return (
            <div className="search">
                <header>
                    <a href="javascript:history.go(-1)">
                        <i className="iconfont icon-zuojiantou"></i>
                    </a>
                    <h1>发现</h1>
                    <i className="iconfont icon-shixincaidan"></i>
                </header>
                <section>
                    <Carousel dots={false} autoplay className="banner">
                        {
                            this.state.swiper.map((item,index)=>{
                                return (
                                    <a key={item.data}>
                                        <img src={item.image} alt="" />
                                    </a>
                                )
                            })
                        }
                    </Carousel>
                    <div className="img">
                        <h1>专题精选</h1>
                        <ul className="clearfix">
                            {
                                this.state.img1.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <img src={item.image} alt=""/>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                        <ul className="clearfix">
                            {
                                this.state.img2.map((item,index)=>{
                                    return (
                                        <li key={index} className="img2">
                                            <img src={item.image} alt=""/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="shops">
                        {
                            this.state.list.map((value,index)=>{
                                return (
                                    <div key={value.goods.title} className="lists" >
                                        <h3>{value.goods.title}</h3>
                                        <ul>
                                            {
                                                value.goods.item.map((item,index)=>{
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