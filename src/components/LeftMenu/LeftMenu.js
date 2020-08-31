import React, { Component } from 'react';
import {LEFT_MENU} from "../../constants/leftMenuConstants";
import LeftMenuItem from "../LeftMenuItem";
import "./LeftMenu.css";

class LeftMenu extends Component {
  render() {
    return <div className="leftMenu">
      {Array.from(LEFT_MENU.keys()).map(key=>(
          <LeftMenuItem key={key} code={key}/>
      ))}
    </div>;
  }
}

export default LeftMenu;
