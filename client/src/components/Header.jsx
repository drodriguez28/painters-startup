import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <button>
                    <Link to="/painter">Painter</Link>
                </button>
                <button>
                    <Link to="/client">Clients</Link>
                </button>
                <button>
                    <Link to="/type"> Paint Brands</Link>
                </button>
                <button>
                    <Link to="/painter/new"> Create New Painter</Link>
                </button>
            </div>
        )
    }
}
