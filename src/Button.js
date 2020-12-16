import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="control">
                <button className="button is-primary">{this.props.message} {this.props.score}</button>
            </div>
        )
    }
}
