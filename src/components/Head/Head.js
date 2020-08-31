import React, { Component } from 'react';
import "./Head.css"
import {TITLE} from "../../constants/leftMenuConstants";

class Head extends Component {
  render() {
    return <div className="head">{TITLE}</div>;
  }
}

export default Head;
