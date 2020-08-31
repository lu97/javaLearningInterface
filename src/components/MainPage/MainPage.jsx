import React, {Component} from "react";
import Head from "../Head";
import LeftMenu from "../LeftMenu";
import ActionPage from "../ActionPage";
import "./MainPage.css"

class MainPage extends Component {
    render() {
        return (
           <div className="mainPage">
               <LeftMenu />
               <div className="rightPart">
                   <Head />
                   <ActionPage />
               </div>
           </div>
        );
    }
}

export default MainPage;
