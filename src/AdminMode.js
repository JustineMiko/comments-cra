import React, { Component } from 'react'

export default class AdminMode extends Component {

    state = {
        isAdmin: false,
       
    }

    ChangeMode = () => {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    render() {
        return (
            <article className="message is-info">
                <div className="message-body">
                <AdminMode isAdmin={this.state.isAdmin} changeMode={this.changeMode}/>
                    <button className="button admin is-info" onClick={this.state.isAdmin}>
                        Activer le mode d'administration
                    </button>
                </div>
            </article>
        )
    }
}

