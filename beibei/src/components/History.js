import React, { Component } from 'react';
import {connect} from 'react-redux';

class HisUI extends Component {
    render (){
        return (
            <dd>
                <ul>
                {
                    this.props.listT.map((item,index)=>{
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }    
                </ul>
            </dd>
        ) 
    }
}

const mapStateToProps = (state,props) => {
    return {
        listT: state.hislist
    }
}
const His = connect(mapStateToProps)(HisUI);

export default His;