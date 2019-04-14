import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Card extends Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{this.props.header}</h5>
                    <div>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}
