import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import MyCoolInput from './MyCoolInput.jsx';


export default class App extends Component {

  inputChange(newSearchStr) {
    console.log("inputChange", newSearchStr);
  }

  render() {
    return (
      <div className="container">
        <MyCoolInput handleChange={this.inputChange.bind(this)}/>
      </div>
    );
  }
}