import React, { Component } from 'react'

import '../App.css'

class Day extends Component {
  render() {
    const {day} = this.props;

    return (
      <div className="container" key={day.id}>
        <div className="cardday">
          <div className="carddayheader">
            <span><strong>Day: </strong> {day.challengeDay}</span>
            <span style={{ float: 'right' }}>
              <strong>Date: </strong>
              {day.date.substring(4, 6)}/
            {day.date.substring(6, 8)}/
            {day.date.substring(0, 4)}
            </span>
          </div>
          <div className='carddaybody'>
            <strong>Challenge Day's Notes:</strong>
            <br />
            <ul>
              {day.dayNotes.map((note, index) => (
                <li key={index}>
                  <span style={{ paddingLeft: '10px' }}>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Day;