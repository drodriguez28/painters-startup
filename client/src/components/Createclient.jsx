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









    render() {
        return (
            <div>

            </div>
        )
    }
}
