import React, { Component } from 'react'
import axios from "axios"


export default class PainterDetails extends Component {

    state = {
        painter: {}
    }


    
componentDidMount= () => {
    axios.get('/api/painter/' + this.props.match.params.id)
        .then((response)=>{
            this.setState({painter: response.data})
            console.log(this.state)    
        })
}
    
    
    
    render() {
        return (
            <div>
                <h1>Painter's Info </h1>
                <h5>name: {this.state.painter.name}</h5>
                <h5>city: {this.state.painter.city}</h5>
                <h5>age: {this.state.painter.age}</h5>
                <h5>email: {this.state.painter.email}</h5>
            </div>
        )
    }
}
