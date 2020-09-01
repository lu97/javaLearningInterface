import React, { Component } from 'react';
import Description from "../Description";
import "./ActionPage.css"
import {connect} from "react-redux";
import {LEFT_MENU} from "../../constants/leftMenuConstants";

class ActionPage extends Component {
  render() {
    const {currentItemCode} = this.props;
    return <div className="actionPage">
      <Description />
      {LEFT_MENU.get(currentItemCode).actionPage}
    </div>;
  }
}
const mapStateToProps = state =>{
  const currentItemCode = state.dataStore.currentItemCode;
  return {currentItemCode};
};
export default connect(mapStateToProps)(ActionPage);
