import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

import Carousel from "antd/lib/carousel";

import '../style/sub.scss';

export default class Sub extends Component {
    constructor (props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            imgSrc: [],
            list: [],
            info: {},
            shopinfo: {},
            store1: {},
            store2:{},
            store3: {}
        }
    }
    componentDidMount(){
        axios.get(`/mo_bile/index.php?act=goods&op=goods_detail&goods_id=${this.state.id}&key=5f4ea42d50d0f84449ab8f3b333e3904`)
        .then((res)=>{
            console.log(res);
            console.log(res.data.datas.store_info.store_credit);
            // console.log(res.data.datas.goods_image.split(","));
            this.setState({
                imgSrc: res.data.datas.goods_image.split(","),
                list: res.data.datas.goods_commend_list,
                info: res.data.datas.goods_info,
                shopinfo: res.data.datas.store_info,
                store1: res.data.datas.store_info.store_credit.store_desccredit,store2: res.data.datas.store_info.store_credit.store_servicecredit,
                store3: res.data.datas.store_info.store_credit.store_deliverycredit               
            })
            if(this.state.store1.percent_text == "低"){
                $(".rate span:eq(0) em").css("color","#48CFAE");
                $(".rate span:eq(0) b").css("background","#48CFAE");
            }else{
                $(".rate span:eq(0) em").css("color","#ED5564");
                $(".rate span:eq(0) b").css("background","#ED5564");
            }
            if(this.state.store2.percent_text == "低"){
                $(".rate span:eq(1) em").css("color","#48CFAE");
                $(".rate span:eq(1) b").css("background","#48CFAE");
            }else{
                $(".rate span:eq(1) em").css("color","#ED5564");
                $(".rate span:eq(1) b").css("background","#ED5564");
            }
            if(this.state.store3.percent_text == "低"){
                $(".rate span:eq(2) em").css("color","#48CFAE");
                $(".rate span:eq(2) b").css("background","#48CFAE");
            }else{
                $(".rate span:eq(2) em").css("color","#ED5564");
                $(".rate span:eq(2) b").css("background","#ED5564");
            }
        })
        $(window).scroll(function(){
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(scrollTop);
            if(scrollTop > 100){
                $(".head").stop().fadeIn(200);
            }else{
                $(".head").stop().fadeOut(200);
            }
       })
    }
    render (){
        return (
            <div className="sub">
                <div className="head">
                    <a href="javascript:history.go(-1)">
                        <i className="iconfont icon-zuojiantou"></i>
                    </a>
                    <h1>商品</h1>
                    <i className="iconfont icon-shixincaidan"></i>
                </div>
                <Carousel dots={true} className="banner">
                {
                    this.state.imgSrc.map((item,index)=>{
                        return (
                            <a key={index}>
                                <img src={item} alt="" />
                            </a>
                        )
                    })
                }
                </Carousel>
                <header>
                    <div>
                        <a href="javascript:history.go(-1)">
                            <i className="iconfont icon-zuojiantou"></i>
                        </a>
                    </div>
                    <div>
                        <i className="iconfont icon-shixincaidan"></i>
                    </div>
                </header>
                <div className="mark">

                </div>
                <section>
                    <div className="name">
                        <h2>{this.state.info.goods_name}</h2>
                        <h3>{this.state.info.goods_jingle}</h3>
                    </div>
                    <div className="price">
                        <span><em>￥</em>{this.state.info.goods_price}</span>
                        <p>销量 : <em>{this.state.info.goods_salenum}</em>件</p>
                    </div>
                    <div className="send">
                        <span>送至</span>
                        <dl>
                            <dt>
                                <i>全国</i>
                                <b>有货</b>
                            </dt>
                            <dd>免运费</dd>
                        </dl>
                        <i className="iconfont icon-genggaishouhuodizhi
设置
"></i>
                    </div>
                    <div className="select">
                        已选<span>默认</span>
                    </div>
                    <div className="assess">
                        <span>商品评价</span>
                        <b>好评率  <em>100%</em></b>
                        <strong>( 0人评价 )</strong>
                    </div>
                    <div className="shop">
                        <p>
                            <i className="iconfont icon-dianpu"></i>
                            <span>{this.state.shopinfo.store_name}</span>
                            <i className="iconfont icon-youjiantou1"></i>
                        </p>
                        <div className="rate">
                            <span>
                                描述相符
                                <em>{this.state.store1.credit}</em>
                                <b>{this.state.store1.percent_text}</b>
                            </span>
                            <span>
                                服务态度
                                <em>{this.state.store2.credit}</em>
                                <b>{this.state.store2.percent_text}</b>
                            </span>
                            <span>
                                发货速度
                                <em>{this.state.store3.credit}</em>
                                <b>{this.state.store3.percent_text}</b>
                            </span>
                        </div>
                    </div>
                    <div className="recommend">
                        <h2>店铺推荐</h2>
                        <ul>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <li key={item.goods_id}>
                                        <img src={item.goods_image_url} alt=""/>
                                        <dt>{item.goods_name}</dt>
                                        <dd>￥{item.goods_price}</dd>
                                    </li>
                                )
                            })
                        }    
                        </ul>
                    </div>
                    <div className="aa">
                        点击查看商品详情
                    </div>
                </section>
                <footer>
                    <div style={{width: "0.58rem"}}>
                        <i className="iconfont icon-tesefuwu"></i>
                        <p>客服</p>
                    </div>
                    <div style={{width: "0.73rem"}}>
                        <i className="iconfont icon-gouwuche"></i>
                        <p>购物车</p>
                    </div>
                    <h2 style={{width: "1.1rem"}}>立即购买</h2>
                    <h3>加入购物车</h3>
                </footer>
            </div>
        )
    }
}