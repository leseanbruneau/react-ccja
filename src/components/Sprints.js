import React, { Component } from 'react'

import '../App.css'
import Sprint from './Sprint'
import { Consumer } from '../context/context'

class Sprints extends Component {

  render() {

    return (
      <Consumer>
        {value => {
          const { sprints } = value;
          // Challenge sprints to display in decending order
          sprints.sort(function (a, b) {
            return b.sprintnbr - a.sprintnbr
          })
          return (
            <React.Fragment>
              {sprints.map(sprint => (
                <Sprint sprint={sprint} />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Sprints;