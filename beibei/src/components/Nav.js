import React, { Component } from 'react';

export default class Nav extends Component {
    render (){
        return (
            <section>
                <ul>
                    <li>推荐</li>
                    <li>童装</li>
                    <li>童鞋</li>
                    <li>婴童用品</li>
                    <li>女装</li>
                    <li>鞋包</li>
                    <li>居家</li>
                    <li>美妆</li>
                    <li>美食</li>
                    <li>下期预告</li>
                </ul>
                <div>
                    <i className="iconfont icon-sousuo"></i>
                </div>
            </section>
        )
    }
}