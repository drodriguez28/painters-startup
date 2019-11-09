import React, { Component } from 'react'
import axios from "axios"


export default class PainterDetails extends Component {

    state = {
        painter: {}
    }
    deletePainter = () => {
        axios.delete('/api/painter/' + this.props.match.params.id)
        .then((response) => {
            this.setState({ deleted: true})
            console.log(response)
        })
        
 
    }



    componentDidMount = () => {
        axios.get('/api/painter/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ painter: response.data })
                console.log(this.state)
            })
    }





    render() {

        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Painter was deleted
                </div>
            )
        } else {

            return (
                <div>
                    <h1>Painter's Info </h1>
                    <h5>name: {this.state.painter.name}</h5>
                    <h5>city: {this.state.painter.city}</h5>
                    <h5>age: {this.state.painter.age}</h5>
                    <h5>email: {this.state.painter.email}</h5>
                    <button onClick={this.deletePainter}>Delete</button>
                </div>
            )
        }
    }
}
