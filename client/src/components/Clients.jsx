import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export default class Clients extends Component {
    state ={
        clients:[]
    }
    componentDidMount = () => {
        axios.get('/api/client')
        .then((response)=>{
            this.setState({clients: response.data})
        })
    }

    render() {
        return (
            <div>
                <h1>Clients</h1>
                {this.state.clients.map((client)=>{
                    return(
                        <div key={client._id}>
                           <Link to={"/clients/" + client._id}><h5>{client.name}</h5></Link> 
                        </div>
                    )
                })}
            </div>
        )
    }
}
