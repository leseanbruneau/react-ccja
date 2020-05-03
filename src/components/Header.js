
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="nav-item pr-2" data-toggle="collapse" data-target="#navbarMain">
            <Link to="/" className="navbar-brand">
              LeSean - 100 Days
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item pr-2" data-toggle="collapse" data-target="#navbarMain">
                <Link to="/retrospective" className="nav-link">
                  Retrospective
                </Link>
              </li>
              <li className="nav-item pr-2" data-toggle="collapse" data-target="#navbarMain">
                <Link to="/reacthelp" className="nav-link">
                  React Tips
                </Link>
              </li>
              <li className="nav-item pr-2" data-toggle="collapse" data-target="#navbarMain">
                <Link to="/resources" className="nav-link">
                  Resources
                </Link>
              </li>
              <li className="nav-item pr-2" data-toggle="collapse" data-target="#navbarMain">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
