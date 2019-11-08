import React, { Component } from 'react'
import axios from "axios"




export default class Createpainter extends Component {
    render() {

        state = {
            newPainter: {
                name: '',
                city: '',
                age: '',
                email: ''
            }
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

        }







        return (
            <div>
                <form onSubmit={this.addNewPainter}>
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="name"
                        value={history.state.newPainter.name}
                        onChange={this.handleNewPainter}
                    />
                </div>
                <div>
                    <input
                        name="city"
                        type="text"
                        placeholder="city"
                        value={history.state.newPainter.city}
                        onChange={this.handleNewPainter}
                    />
                </div>

                <div>
                    <input
                        name="age"
                        type="text"
                        placeholder="age"
                        value={history.state.newPainter.age}
                        onChange={this.handleNewPainter}
                    />
                </div>


                <div>
                    <input
                        name="email"
                        type="text"
                        placeholder="email"
                        value={history.state.newPainter.email}
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
