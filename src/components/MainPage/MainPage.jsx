import React from 'react';
export class MainPage extends React.Component {
    constructor() {
        super();
        this.toGreetings = this.toGreetings.bind(this);
    }
    render() {
        return (
            <div>
                <div className="head">Страничка для реализации всяких паттернов</div>
                <div className="toPage" onClick={this.toGreetings()}>Приветствие</div>
            </div>
        ) ;
    }

    toGreetings(){

    }
}
