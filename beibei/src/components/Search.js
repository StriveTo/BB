import React, { Component } from 'react';

import '../style/search.scss';

export default class Search extends Component {
    render (){
        return (
            <div className="search">
                <header>
                    <i className="iconfont icon-zuojiantou"></i>
                    <h1>发现</h1>
                    <i className="iconfont icon-shixincaidan"></i>
                </header>
            </div>
        )
    }
}