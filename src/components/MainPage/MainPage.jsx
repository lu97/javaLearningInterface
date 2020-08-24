import React from 'react';
import {GREETING, mainData} from '../../StaticData';
import {Block} from "../Block/Block";
import "./MainPage.css";
import {Greeting} from "../Greeting/Greeting";
import {Link} from "react-router-dom";
export class MainPage extends React.Component {
    constructor() {
        super();
        this.getComponent = this.getComponent.bind(this);
        this.state = { currentComponent: <div></div> };
    }
    render() {
        return (
            <div className="all">
                <div className="head">Страничка для реализации всяких паттернов</div>
                <div className="descr">Клацните по карточке с названием паттерна, чтоб ниже появилась
                реализация данного паттерна и дальнейшие инструкции</div>
                <div className="block">
                {mainData.map(data=>
                        <Link to={data.key}><Block key={data.key} data={data}/></Link>
                    )}
                </div>
            </div>
        ) ;
    }
    getComponent(key) {
        let result  = null;
        switch (key) {
            case GREETING: result =  <Greeting/>;
            default: result = <div></div>;
        }
        this.setState({
            currentComponent: result
        });
    }
}
