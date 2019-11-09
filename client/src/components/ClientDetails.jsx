import React, { Component } from 'react'
import axios from "axios"

export default class ClientDetails extends Component {

    state = {
        client: {}
    }

    deleteClient = () => {
        axios.delete('/api/client/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }



    componentDidMount = () => {
        axios.get('/api/client/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ client: response.data })
                console.log(this.state)
            })
    }


    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Client was deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Client's Info</h1>
                    <h5>name: {this.state.client.name}</h5>
                    <h5>typeofjob: {this.state.client.typeofjob}</h5>
                    <h5>city: {this.state.client.city}</h5>
                    <h5>state: {this.state.client.state}</h5>
                    <h5>email: {this.state.client.email}</h5>
                    <button onClick={this.deleteClient}> Delete </button>
                </div>
            )
        }
    }
}
