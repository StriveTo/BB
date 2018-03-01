import React, { Component } from 'react';
import axios from 'axios';

export default class Detail extends Component {
    render (){
        return (
            <div>
                <h1>详情页</h1>
                {this.props.match.params.name}
            </div>
        )
    }
}
