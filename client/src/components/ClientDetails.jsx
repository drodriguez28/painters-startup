import React, { Component } from 'react'
import axios from "axios"

export default class ClientDetails extends Component {
    
    state = {
        client:{}
    }
    
    componentDidMount=() => {
        axios.get('/api/client/'+ this.props.match.params.id)
            .then((response)=>{
                this.setState({client: response.data})
                console.log(this.state)
            })
    }
    
      
    render() {
        return (
            <div>
                <h1>Client's Info</h1>
                <h5>name: {this.state.client.name}</h5>
                <h5>typeofjob: {this.state.client.typeofjob}</h5>
                <h5>city: {this.state.client.city}</h5>
                <h5>state: {this.state.client.state}</h5>
                <h5>email: {this.state.client.email}</h5>
            </div>
        )
    }
}
