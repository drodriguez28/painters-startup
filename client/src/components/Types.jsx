import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


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
                {this.state.types.map((type)=>{
                    return(
                        <div key={type._id}>
                           <Link to={"/types/" +type._id} ><h5>{type.name}</h5></Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
