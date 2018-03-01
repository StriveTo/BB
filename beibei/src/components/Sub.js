import React, { Component } from 'react';
import axios from 'axios';

export default class Sub extends Component {
    constructor (props){
        super(props);

        this.state = {
            id: this.props.match.params.id
        }
    }
    componentDidMount(){
        axios.get(`/mo_bile/index.php?act=goods&op=goods_detail&goods_id=${this.state.id}&key=5f4ea42d50d0f84449ab8f3b333e3904`)
        .then((res)=>{
            console.log(res);
        })
    }
    render (){
        return (
            <div className="sub">
                <h1>详情页</h1>
                {this.props.match.params.id}
            </div>
        )
    }
}