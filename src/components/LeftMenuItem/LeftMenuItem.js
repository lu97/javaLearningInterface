import React, { Component } from 'react';
import "./LeftMenuItem.css";
import "../../index.css";
import {LEFT_MENU, MAIN_PAGE} from "../../constants/leftMenuConstants";
import {connect} from "react-redux";
import {setCurrentItemCode} from "../../actions/DataStoreActions";

class LeftMenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = "leftMenuItemHovering";
    let { currentItemCode, code} = this.props;
    let logo="../../resources/logo.png";
    let title = LEFT_MENU.get(this.props.code).title;
    if(code === MAIN_PAGE) title=(<img src={logo}/>);
    if(code === currentItemCode) className += " selected";
    return <div className={className}>{title}</div>;
  }
}
const mapStateToProps = state =>{
  const currentItemCode = state.dataStore.currentItemCode;
  return {currentItemCode};
};
const mapDispatchToProps = dispatch =>({
  setCurrentItemCode
});
export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuItem);
