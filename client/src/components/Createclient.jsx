import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'





export default class Createclient extends Component {

    state = {
        redirect: false,
        newClient: {
            name: "",
            typeofjob: "",
            city: "",
            state: "",
            email: ""

        },
        createdClientId: null
    }
    handleNewClient = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;


        const newClient = { ...this.state.newClient };
        newClient[attributeName] = attributeValue;

        this.setState({ newClient })

    }

    addNewClient = (event) => {
        event.preventDefault();

        axios.post('/api/client', this.state.newClient)
            .then(createdClient => {
                const newState = { ...this.state }
                newState.createdClientId = createdClient._id
                newState.redirect = true
                this.setState(newState)
            })
    }







    render() {
        return (
            <div>
                <form onSubmit={this.addNewClient}>
                    {this.state.redirect ?(<Redirect to={`/client${this.state.createdClientId}`}/>) :null}














                </form>
            </div>
        )
    }
}
