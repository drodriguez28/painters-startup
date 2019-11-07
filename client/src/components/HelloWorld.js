import React, { Component } from 'react'
import axios from 'axios'


export default class Painters extends Component {

    
    state = {
        allPainters: []
    }

    
    componentDidMount() {
        axios.get('/api/allPainters')
            .then((res) => {
                this.setState({message: res.data})
            })
    }

    
    render() {
        return (
            <div>
                {this.state.allPainters.map(()=>{
                    return (<p>{Painters.name}</p>)
                })}
            </div>
        )
    }
}
