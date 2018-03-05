import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PUI extends Component {
    render (){
        return (
            <main>
                <div>
                    <input type="text" placeholder="请输入搜索关键字" ref="ipt" value=""/>
                </div>
                <p onClick={()=>this.props.toFind(this.refs.ipt.value)}>
                搜索
                    <Link to={"/detail/" +this.refs.ipt.value}>
                        搜索
                    </Link>
                </p>
            </main>
        ) 
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        toFind : (item,his)=>{
            dispatch({
                type : "ADD_LIST",
                payload : item
            })
        }
    }
}
const P = connect(null,mapDispatchToProps)(PUI);

export default P;