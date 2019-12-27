import React, { Component } from 'react'

import '../App.css'
import Day from './Day'

export default class Days extends Component {

  render() {
    const {days} = this.props;

    // Want decending order on challenge days in sprint - most recent days first
    days.sort(function (a, b) {
      return b.challengeDay - a.challengeDay
    })
    
    return (
      <React.Fragment>
        {days.map((day,i) => (
          <Day day={day} key={i} />
        ))}
      </React.Fragment>
    )
  }
}
