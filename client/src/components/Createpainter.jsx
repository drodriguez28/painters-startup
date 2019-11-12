import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'





export default class Createpainter extends Component {

    state = {
        redirect: false,
        newPainter: {
            name: '',
            city: '',
            age: '',
            email: ''
        },
        createdPainterId: null
    }

    handleNewPainter = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;



        const newPainter = { ...this.state.newPainter };
        newPainter[attributeName] = attributeValue;


        this.setState({ newPainter })

    }

    addNewPainter = (event) => {
        event.preventDefault();


        axios.post('/api/painter', this.state.newPainter)
            .then(createdPainter => {
                const newState = { ...this.state }
                newState.createdPainterId = createdPainter._id
                newState.redirect = true
                this.setState(newState)
            })

    }







    render() {
        return (
            <div>
                <form onSubmit={this.addNewPainter}>

                    {this.state.redirect ? (<Redirect to={`/painter${this.state.createdPainterId}`} />) : null}

                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={this.state.newPainter.name}
                            onChange={this.handleNewPainter}
                        />
                    </div>
                    <div>
                        <input
                            name="city"
                            type="text"
                            placeholder="city"
                            value={this.state.newPainter.city}
                            onChange={this.handleNewPainter}
                        />
                    </div>

                    <div>
                        <input
                            name="age"
                            type="text"
                            placeholder="age"
                            value={this.state.newPainter.age}
                            onChange={this.handleNewPainter}
                        />
                    </div>


                    <div>
                        <input
                            name="email"
                            type="text"
                            placeholder="email"
                            value={this.state.newPainter.email}
                            onChange={this.handleNewPainter}
                        />
                    </div>



                    <div>
                        <input
                            type="submit"
                            value="Create New Painter"
                        />
                    </div>

                    



                </form>
            </div>
        )
    }
}
