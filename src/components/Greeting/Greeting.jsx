import React from 'react';
export class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.toGreetings = this.toGreetings.bind(this);
    }
    render() {
        return (
            <div>Блок с приветствием</div>
        ) ;
    }
}
