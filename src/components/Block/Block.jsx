import React from 'react';
import "./Block.css";
import {GREETING} from "../../StaticData";
import {Greeting} from "../Greeting/Greeting";
export class Block extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, description, key} = this.props.data;
        return (<div className="content">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>)
    }
}
