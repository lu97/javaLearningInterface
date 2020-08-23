import React from 'react';
import "./Block.css";
export class Block extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, description } = this.props.data;
        return (<div className="content">
            <div className="title">{ title }</div>
            <div className="description">{ description }</div>
            <div className="action"></div>
        </div>)
    }
}
