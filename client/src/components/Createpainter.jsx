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







        return (
            <div>

            </div>
        )
    }
}
