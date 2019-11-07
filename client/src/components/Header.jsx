import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/painter">Painter</Link>
                <Link to="/client">Clients</Link>
                <Link to="/type"> Paint Brands</Link>
            </div>
        )
    }
}
