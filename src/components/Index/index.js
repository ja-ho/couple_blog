import React, { PureComponent } from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default class Index extends PureComponent {
  render() {
    return(
      <div>
        <NavBar />
        <div className="jumbotron">
            <h1>hihi this is blog!</h1>
        </div>
      </div>
    );
  }
}
