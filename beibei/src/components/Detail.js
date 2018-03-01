import React, { Component } from 'react';
import axios from 'axios';

import '../style/detail.scss';

// import Spin from 'antd/lib/spin';

export default class Detail extends Component {
    constructor (props){
        super(props);

        this.state = {
            name: this.props.match.params.name,
            goods: []
        }

        this.gotoSub = this.gotoSub.bind(this);
    }
    gotoSub(id){
        this.props.history.push("/sub/" + id);
    }
    componentDidMount(){
        axios.get(`/mo_bile/index.php?act=goods&op=goods_list&keyword=${this.state.name}&page=10&curpage=1&keyword=${this.state.name}`)
        .then((res)=>{
            // console.log(res);
            this.setState({
                goods: res.data.datas.goods_list
            })
        })
    } 
    render (){
        if(this.state.goods.length){
            return (
                // <Spin tip="Loading..." delay="1000">
                <div className="detail">
                    <header>
                        <a href="javascript:history.go(-1)">
                            <i className="iconfont icon-zuojiantou"></i>
                        </a>
                        <div className="srh">
                            <h2>{this.state.name}</h2>
                            <i className="iconfont icon-sousuo"></i>
                        </div>
                        <i className="iconfont icon-shixincaidan"></i>
                    </header>
                    <ul className="fliter">
                        <li>综合排序</li>
                        <li>销量优先</li>
                        <li>筛选</li>
                        <li><i className="iconfont icon-202"></i></li>
                    </ul>
                    <section>
                        <ul className="good">
                        {
                            this.state.goods.map((item,index)=>{
                                return (
                                    <li key={item.goods_id} onClick={()=>this.gotoSub(item.goods_id)}>
                                        <img src={item.goods_image_url} alt=""/>
                                        <div className="info">
                                            <h2>{item.goods_name}</h2>
                                            <span>￥{item.goods_price}</span>
                                            <p>
                                                <span>销量  <em>{item.goods_salenum}</em></span>
                                                <a href="">{item.store_name}&nbsp;&nbsp;<i className="iconfont icon-shixincaidan"></i></a>
                                            </p>
                                        </div>
                                        
                                    </li>
                                )
                            })
                        }
                            <p style={{"fontSize": "12px",
                                        "padding": "0.2rem 0",
                                        "textAlign": "center",
                                        "background": "#eee"
                    }}>Copyright&nbsp;©&nbsp;2014-2016 汉购网hangowa.com版权所有         </p>
                        </ul>
                        
                    </section>
                </div>
                // </Spin>
            )
        }else{
            return (
                <div className="detail">
                    <header>
                        <a href="javascript:history.go(-1)">
                            <i className="iconfont icon-zuojiantou"></i>
                        </a>
                        <div className="srh">
                            <h2>{this.state.name}</h2>
                            <i className="iconfont icon-sousuo"></i>
                        </div>
                        <i className="iconfont icon-shixincaidan"></i>
                    </header>
                    <ul className="fliter">
                        <li>综合排序</li>
                        <li>销量优先</li>
                        <li>筛选</li>
                        <li><i className="iconfont icon-202"></i></li>
                    </ul>
                    <section style={{background: "#eee"}}>
                        <div className="nosrh">
                            <p><i className="iconfont icon-sousuo"></i></p>
                            <h2>没有找到任何相关信息</h2>
                            <h3>选择或搜索其他商品品分类/名称...</h3>
                            <a href="javascript:history.go(-1)">重新选择</a>
                        </div>
                    </section>
                    <p style={{"fontSize": "12px",
                                    "padding": "0.05rem 0",
                                    "textAlign": "center",
                                    "position": "absolute",
                                    "bottom": "0",
                                    "width": "3.75rem"
                }}>Copyright&nbsp;©&nbsp;2014-2016 汉购网hangowa.com版权所有</p>
                </div>
            )
        }
    }
}
