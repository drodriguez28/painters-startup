import React, { Component } from 'react'
import axios from "axios"

export default class Painters extends Component {
    state = {
        painters: []
    }
    componentDidMount = () => {
        axios.get('/api/painter')
        .then((response)=>{
            this.setState({painters: response.data})
        })
    }
    render() {
        return (
            <div>
               <h1>{this.state.painters.map((painters)=>{
                   return(
                       <div>
                           {painters.name}
                       </div>
                   )
               })}</h1> 
            </div>
        )
    }
}
