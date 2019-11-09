import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'


export default class Createtypes extends Component {
    
    
    state ={
        redirect: false,
        newType: {
            name:"",
            description:"",
            stores:""
        },
        createdTypeId: null
    }
    
    handleNewType = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newType ={...this.state.newType};
        newType[attributeName] =attributeValue;

        this.setState({newType})
    }




    addNewType = (event) => {
        event.preventDefault();

        axios.post('/api/type',this.state.newType)
            .then(createdType => {
                const newState ={...this.state}
                newState.createdTypeId = createdType._id
                newState.redirect = true 
                this.setState(newState)
            })
    }
    
 
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
