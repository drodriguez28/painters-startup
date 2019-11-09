import React, { Component } from 'react'
import axios from "axios"


export default class TypeDetails extends Component {
    state = {
        type: {}
    }

    deleteType = () => {
        axios.delete('/api/type/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }



    componentDidMount = () => {
        axios.get('/api/type/' + this.props.match.params.id)
            .then((reponse) => {
                this.setState({ type: reponse.data })
                console.log(this.state)
            })
    }

    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Paint Brand Deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Paint Info</h1>
                    <h5>name: {this.state.type.name}</h5>
                    <h5>description:{this.state.type.description}</h5>
                    <h5>stores:{this.state.type.stores} </h5>
                    <button onClick={this.deleteType}> Delete</button>
                </div>
            )
        }
    }
}    
