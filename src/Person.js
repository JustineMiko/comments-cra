import React, { Component } from 'react'

export default class Person extends Component {
    render() {

        return (
            <div>
                <h3>Son nom : {name}</h3>
                <p>Son âge : {age} </p>  
            </div>
        )
    }
}
