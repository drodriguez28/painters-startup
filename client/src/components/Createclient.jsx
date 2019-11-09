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


        const newClient = {...this.state.newClient};
        newClient[attributeName] = attributeValue;

        this.setState({ newClient})

    }

    







    render() {
        return (
            <div>

            </div>
        )
    }
}
