import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

// components/Navigation/NavigationItems and NavigationItem
// <NavigationItem link="/" active>
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        Code Challenge Day Journal
                    </a>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item px-4">
                        <Link to="/reacthelp" className="nav-link">
                            React Tips
                        </Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link to="/resources" className="nav-link">
                            Resources
                        </Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;