import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import './App.css';
import {MainPage} from "./components/MainPage/MainPage";
import {Greeting} from "./components/Greeting/Greeting";
import {GREETING} from "./StaticData";

class App extends Component {
    render() {
        const { history } = this.props;

        return (
            <div className="App">
                <MainPage/>
                <Switch>
                    <Route history={history} path={'/' + GREETING} component={Greeting} />
                    <Redirect from='/' to='/main'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App)
