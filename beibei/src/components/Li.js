import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class LiUI extends Component {
    render (){
        return (
            <li onClick={()=>this.props.gotoFind(this.props.LiItem)}>
                <Link to={"/detail/" + this.props.LiItem}>
                    {this.props.LiItem}
                </Link>
            </li>
        ) 
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        gotoFind : (item)=>{
            dispatch({
                type : "ADD_LIST",
                payload : item
            })
        }
    }
}
const Li = connect(null,mapDispatchToProps)(LiUI);

export default Li;