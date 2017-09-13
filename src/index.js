import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
