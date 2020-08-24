import React from 'react';
import './Greeting.css';
export class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }
    render() {
        return (
            <div className="greetingPage">
                <p>При нажатии на кнопку отправляем запрос к серверу, метод там парсит данные с сайта,
                    собирает их в объект и возвращает сюда.</p>
                <div className="btnGreeting">Получить данные</div>
                <div onClick={this.getData} className="contentGreeting"></div>
            </div>
        ) ;
    }

    getData(){

    }
}
