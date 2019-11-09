import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'


export default class Createtype extends Component {


    state = {
        redirect: false,
        newType: {
            name: "",
            description: "",
            stores: ""
        },
        createdTypeId: null
    }

    handleNewType = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newType = { ...this.state.newType };
        newType[attributeName] = attributeValue;

        this.setState({ newType })
    }




    addNewType = (event) => {
        event.preventDefault();

        axios.post('/api/type', this.state.newType)
            .then(createdType => {
                const newState = { ...this.state }
                newState.createdTypeId = createdType._id
                newState.redirect = true
                this.setState(newState)
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addNewType}>
                    {this.state.redirect ? (<Redirect to={`/type${this.state.createdTypeId}`} />) : null}

                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={this.state.newType.name}
                            onChange={this.handleNewType}
                        />
                    </div>

                    <div>
                        <input
                            name="description"
                            type="text"
                            placeholder="description"
                            value={this.state.newType.description}
                            onChange={this.handleNewType}
                        />
                    </div>

                    <div>
                        <input
                        name="stores"
                        type="text"
                        placeholder="stores"
                        value={this.state.newType.stores}
                        onChange={this.handleNewType}   
                        />
                    </div>

                    <div>
                        <input
                        type="submit"
                        value="Create Paint" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}
