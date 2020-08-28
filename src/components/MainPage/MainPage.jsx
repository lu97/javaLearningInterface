import React, {Component} from "react";
import Head from "../Head";
import LeftMenu from "../LeftMenu";
import ActionPage from "../ActionPage";

class MainPage extends Component {
    render() {
        return (
           <div>
               <LeftMenu></LeftMenu>
               <div>
                   <Head></Head>
                   <ActionPage></ActionPage>
               </div>
           </div>
        );
    }
}

export default MainPage;
