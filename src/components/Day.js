import React, { Component } from 'react'

import '../App.css'

class Day extends Component {
  render() {
    const {day} = this.props;

    return (
      <div key={day.id}>
        <div className="cardday">
          <div className="carddayheader">
            <span><strong>Sprint Day: </strong> {day.sprintDay} | </span>
            <span><strong>Challenge Day: </strong> {day.challengeDay}</span>
            <span style={{ float: 'right' }}>
              <strong>Date: </strong>
              {day.date.substring(4, 6)}/
            {day.date.substring(6, 8)}/
            {day.date.substring(0, 4)}
            </span>
          </div>
          <div className='carddaybody'>
            <strong>Challenge Day Accomplishments:</strong>
            <br />
            <ul>
              {day.dayNotes.map((note, index) => (
                <li key={index}>
                  <span style={{ paddingLeft: '20px' }}>{note}</span>
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