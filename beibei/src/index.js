import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './style/common.css';
import './style/iconfont/iconfont.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
