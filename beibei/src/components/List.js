import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

import '../style/list.scss';

export default class List extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: ["iconfont icon-shengxianshuiguo","iconfont icon-icon-test","iconfont icon-lingshi","iconfont icon-liangyouganhuo","iconfont icon-jiushuiyinliao","iconfont icon-tesefuwu"],
            list: [],
            arr: []
            
        }

        this.getId = this.getId.bind(this);
        this.gotoDetail = this.gotoDetail.bind(this);
    }
    getId(id){
        $(".change").on('click',function(){
            $(this).css({
                "color": "#ED5564",
                "border-bottom": "solid 2px #ED5564"
            })
            $(this).siblings().css({
                "color": "#777",
                "border-bottom": "solid 1px #ddd"
            })
        })
        axios.get("/mo_bile/index.php?act=goods_class&op=get_child_all&gc_id=" + id)
        .then((res)=>{
            // console.log(res);
            // console.log(res.data.datas.class_list);
            this.setState({
                arr: res.data.datas.class_list
            })
        });
    }
    gotoDetail(name){
        // console.log(this);
        this.props.history.push("/detail/" + name);
    }
    componentDidMount(){
        axios.get("/mo_bile/index.php?act=goods_class")
        .then((res)=>{
            // console.log(res.data.datas.category_list);
            this.setState({
                list: res.data.datas.category_list
            })
        })
        axios.get("/mo_bile/index.php?act=goods_class&op=get_child_all&gc_id=35")
        .then((res)=>{
            // console.log(res);
            // console.log(res.data.datas.class_list);
            this.setState({
                arr: res.data.datas.class_list
            })
        })
    }
    render (){
        return (
            <div className="list">
                <header>
                    <a href="javascript:history.go(-1)">
                        <i className="iconfont icon-zuojiantou"></i>
                    </a>
                    <h1>商品分类</h1>
                    <i className="iconfont icon-shixincaidan"></i>
                </header>
                <section>
                    <ul className="nav">
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <li className="change" onClick={()=>{this.getId(item.cat_id)}} key={item.cat_id}>
                                        <i className={this.state.name[index]}></i>
                                        <span>{item.cat_name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="goods">
                        {
                            this.state.arr.map((item,index)=>{
                                return (
                                    <div key={item.cat_id} className="arrs">
                                        <h2 onClick={()=>this.gotoDetail(item.cat_name)}><i className="iconfont icon-dian"></i>{item.cat_name}<i className="iconfont icon-youjiantou1"></i></h2>
                                        
                                        <ul className="lis">
                                        {
                                            item.child.map((value,index)=>{
                                                return (
                                                    <li onClick={()=>this.gotoDetail(value.cat_name)} key={value.cat_id}>{value.cat_name}</li>
                                                )
                                            })
                                        }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}