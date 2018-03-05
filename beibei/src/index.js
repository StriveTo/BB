import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import './style/common.css';
import './style/iconfont/iconfont.css';

import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
    hislist: function(state=[], action){
        switch(action.type){
            case "ADD_LIST":
            var newState = [...state];
            newState.push(action.payload);
            return newState;
            default:
                return state;
        }
    }
})

const store = createStore(reducers,{});

function renderPage(){
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

store.subscribe(renderPage);

registerServiceWorker();
