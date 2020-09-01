import React, { Component } from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {LEFT_MENU, MAIN_PAGE} from "../../constants/leftMenuConstants";
import {setCurrentItemCode} from "../../actions/DataStoreActions";

import "./LeftMenuItem.css";
import "../../index.css";

class LeftMenuItem extends Component {
  constructor(props) {
    super(props);
    this.setCode = this.setCode.bind(this);
  }
  render() {
    let className = "leftMenuItemHovering";
    const { currentItemCode, code, setCurrentItemCode} = this.props;
    let logo="../../resources/logo.png";
    let title = LEFT_MENU.get(this.props.code).title;
    if(code === MAIN_PAGE) title=(<img src={logo}/>);
    if(code === currentItemCode) className += " selected";
    return <div className={className} onClick={this.setCode}>{title}</div>;
  }

  setCode(){
    const { setCurrentItemCode, code } = this.props;
    setCurrentItemCode(code);
  }
}
const mapStateToProps = state =>{
  const currentItemCode = state.dataStore.currentItemCode;
  return {currentItemCode};
};
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({
    setCurrentItemCode
  }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuItem);
