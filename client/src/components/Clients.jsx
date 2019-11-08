import React, { Component } from 'react'
import axios from "axios"



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
                        <div>
                           <h5>{client.name}</h5> 
                        </div>
                    )
                })}
            </div>
        )
    }
}
