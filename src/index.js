import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
