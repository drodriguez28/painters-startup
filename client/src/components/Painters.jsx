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


    createPainter = () =>{
        const newPainter ={

        }
        axios.post('/api/painter', newPainter)
    }

    
    render() {
        return (
            <div>
                <h1>Painters Start-Up</h1>
               {this.state.painters.map((painter)=>{
                   return(
                       <div>
                          <h5>{painter.name}</h5> 
                       </div>
                   )
               })}
            </div>
        )
    }
}
