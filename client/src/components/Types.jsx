import React, { Component } from 'react'
import axios from "axios"


export default class Types extends Component {
    state = {
      types: []  
    }
    componentDidMount = () => {
        axios.get('/api/type')
        .then((response)=>{
            this.setState({types: response.data})
        })
    }
    render() {
        return (
            <div>
                <h1>Paint Brands</h1>
                <h1>{this.state.types.map((type)=>{
                    return(
                        <div>
                            {type.name}
                        </div>
                    )
                })}</h1>
            </div>
        )
    }
}
