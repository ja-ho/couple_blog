import React, { PureComponent } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {IndexContainer, AlbumContainer, BoardContainer} from './containers';

import 'bootstrap/dist/css/bootstrap.css';

class routes extends PureComponent{

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={IndexContainer} />
                    <Route path="/album" component={AlbumContainer} />
                    <Route path="/board" component={BoardContainer} />
                </div>
            </Router>
        );
    }
}

export default routes;
