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
                    {this.state.redirect ? (<Redirect to={`/client${this.state.createdClientId}`} />) : null}

                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={this.state.newClient.name}
                            onChange={this.handleNewClient}

                        />
                    </div>

                    <div>
                        <input
                            name="typeofjob"
                            type="text"
                            placeholder="type of job"
                            value={this.state.newClient.typeofjob}
                            onChange={this.handleNewClient}

                        />
                    </div>

                    <div>
                        <input
                            name="city"
                            type="text"
                            placeholder="city"
                            value={this.state.newClient.city}
                            onChange={this.handleNewClient}
                        />
                    </div>


                    <div>
                        <input
                            name="state"
                            type="text"
                            placeholder="state"
                            value={this.state.newClient.state}
                            onChange={this.handleNewClient}
                        />
                    </div>
                    <div>

                        <input
                            name="email"
                            type="text"
                            placeholder="email"
                            value={this.state.newClient.email}
                            onChange={this.handleNewClient}
                        />
                    </div>


                    <div>
                        <input
                            type="submit"
                            value="Create Client"


                        />


                    </div>

                </form>
            </div>
        )
    }
}
