import React, { Component } from 'react';
import "./Description.css";
import "../../index.css";
import {connect} from "react-redux";
import {getItem, LEFT_MENU} from "../../constants/leftMenuConstants";
class Description extends Component {
  render() {
    const { currentItemCode } = this.props;
    return <div className="description">{getItem(currentItemCode).description}</div>;
  }
}
const mapStateToProps = state =>{
  const currentItemCode = state.dataStore.currentItemCode;
  return {currentItemCode};
};
export default connect(mapStateToProps)(Description);
