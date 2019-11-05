import React, { Component } from 'react'

import '../App.css'

import { Consumer } from '../context/context'

export default class Days extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { days } = value;
                    // Challenge days to display in decending order
                    days.sort(function (a, b) {
                        return b.challengeDay - a.challengeDay
                    })
                    return (
                        <React.Fragment>
                            {days.map(day => (
                                <div className="container card" key={day.id}>
                                    <div className="cardheader">
                                        <span><strong>Challenge Day: </strong> {day.challengeDay}</span>
                                        <span style={{ float: 'right' }}>
                                            <strong>Date: </strong>
                                            {day.date.substring(4, 6)}/
                                    {day.date.substring(6, 8)}/
                                    {day.date.substring(0, 4)}
                                        </span>
                                    </div>
                                    <div className='cardbody'>
                                        <strong>Notes:</strong>
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
                        ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
