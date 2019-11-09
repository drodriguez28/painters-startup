import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <button>
                    <Link to="/painters">Painters</Link>
                </button>
                <button>
                    <Link to="/clients">Clients</Link>
                </button>
                <button>
                    <Link to="/types"> Paint Brands</Link>
                </button>
                <button>
                    <Link to="/painter/new"> Create New Painter</Link>
                </button>
                <button>
                    <Link to="/client/new">Create Client</Link>
                </button>
                <button>
                    <Link to="/type/new">Create Paint Brands</Link>
                </button>




            </div>
        )
    }
}
