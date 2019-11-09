import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class Painters extends Component {
    state = {
        painters: []
    }
    componentDidMount = () => {
        axios.get('/api/painter')
            .then((response) => {
                this.setState({ painters: response.data })
            })
    }





    render() {
        return (
            <div>
                <h1>Painters Start-Up</h1>
                {this.state.painters.map((painter) => {
                    return (
                        <div key={painter._id}> 
                            <Link to={"/painters/" + painter._id}><h5>{painter.name}</h5></Link>

                        </div>
                    )
                })}
            </div>
        )
    }
}
