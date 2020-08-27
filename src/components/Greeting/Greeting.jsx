import React from 'react';
import './Greeting.css';
import axios from 'axios';
import {HOST} from "../../StaticData";
export class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {data: null}
    }
    render() {
        return (
            <div className="greetingPage">
                <p>При нажатии на кнопку отправляем запрос к серверу, метод там парсит данные с сайта,
                    собирает их в объект и возвращает сюда.</p>
                <div className="btnGreeting" onClick={this.getData}>Получить данные</div>
                {console.log(this.state)}
                {this.state.data &&
                    <div className="contentGreeting">{this.state.data.content}</div>
                }
            </div>
        ) ;
    }

    getData(){
        axios.get(`${HOST}/greeting`)
            .then(res => {
                const message= res.data;
                this.setState({data: message});
            })
    }
}
