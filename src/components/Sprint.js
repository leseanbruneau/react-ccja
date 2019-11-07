import React, { Component } from 'react'

import Days from './Days'

class Sprint extends Component {

  state = {
    showSprintDetails: false
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
              <span><strong>Sprint Title: </strong>{sprint.sprinttitle}</span>
              <span className="cardsprintheaderbutton">
              <button onClick={this.onShowClick}>
                {showSprintDetails ? "Hide Details" : "Show Details" }
              </button>
              </span>
            </div>
            {showSprintDetails ? (
              <div className='cardsprintbody'>
                <div className="sprintinfo">
                  <div className="sprintlabel">Sprint Number:</div><div className="sprintdesc">{sprint.sprintnbr}</div>
                </div>
                <div className="sprintinfo">
                  <div className="sprintlabel">Sprint Goals:</div><div className="sprintdesc">{sprint.sprintgoals}</div>
                </div>
                <div className="sprintinfo">
                  <div className="sprintlabel">Sprint Review:</div><div className="sprintdesc">{sprint.sprintreview}</div>
                </div>
                <br />
                <Days days={sprint.days} />
              </div>
            ) : null}
          </div>
        </div>
    )
  }
}

export default Sprint;

