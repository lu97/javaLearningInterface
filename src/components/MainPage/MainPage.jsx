import React from 'react';
import {mainData} from '../../StaticData';
import {Block} from "../Block/Block";
import "./MainPage.css";
export class MainPage extends React.Component {
    constructor() {
        super();
        this.toGreetings = this.toGreetings.bind(this);
    }
    render() {
        return (
            <div className="all">
                <div className="head">Страничка для реализации всяких паттернов</div>
                <div className="descr">Клацните по карточке с названием паттерна, чтоб ниже появилась
                реализация данного паттерна и дальнейшие инструкции</div>
                <div className="block">
                {mainData.map(data=> <Block key={data.id} data={data}/>)}
                </div>
            </div>
        ) ;
    }

    toGreetings(){

    }
}
