import React, { Component } from 'react'

class Sprint extends Component {

  state = {
    showSprintDetails: true
  };

  onShowClick = e => {
    this.setState({ showSprintDetails: !this.state.showSprintDetails });
  }

  render() {

    const {sprint} = this.props;
    const {showSprintDetails} = this.state;

    return (
        <div className="container" key={sprint.id}>
          <div className="cardsprint">
            <div className="cardsprintheader">
              <span><strong>Sprint: </strong>{sprint.sprintnbr}</span>
              <span className="ml-5"><strong>Sprint Title: </strong>{sprint.sprinttitle}</span>
              <span className="cardsprintheaderbutton"><button onClick={this.onShowClick}>Show Details</button></span>
            </div>
            {showSprintDetails ? (
              <div className='cardsprintbody'>
                <div><strong>Sprint Goals: </strong>{sprint.sprintgoals}</div>
                <div><strong>Sprint Review: </strong>{sprint.sprintreview}</div>
                {sprint.days.map(day => (
                  <div className="container" key={day.id}>
                    <div className="cardday">
                      <div className="carddayheader">
                        <span><strong>Challenge Day: </strong> {day.challengeDay}</span>
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
                ))}
              </div>
            ) : null}
          </div>
        </div>
    )
  }
}

export default Sprint;