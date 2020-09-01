import React, { Component } from 'react';
import "./Head.css"
import {LEFT_MENU, TITLE} from "../../constants/leftMenuConstants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setCurrentItemCode} from "../../actions/DataStoreActions";

class Head extends Component {
  render() {
    const {currentItemCode} = this.props;
    return <div className="head">{LEFT_MENU.get(currentItemCode).title}</div>;
  }
}
const mapStateToProps = state =>{
  const currentItemCode = state.dataStore.currentItemCode;
  return {currentItemCode};
};
export default connect(mapStateToProps)(Head);
