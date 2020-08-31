import React, { Component } from 'react';
import "./LeftMenuItem.css";
import "../../index.css";
import {LEFT_MENU, MAIN_PAGE} from "../../constants/leftMenuConstants";
import {connect} from "react-redux";
import {setCurrentItemCode} from "../../actions/DataStoreActions";

class LeftMenuItem extends Component {
  constructor(props) {
    super(props);
    this.setCode = this.setCode.bind(this);
  }
  render() {
    console.log(this.props);
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
    console.log(setCurrentItemCode, code );
    setCurrentItemCode(code);
    console.log(this.props);
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
