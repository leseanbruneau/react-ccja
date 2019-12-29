import React, { Component } from 'react'

import Days from './Days'

class Sprint extends Component {

  state = {
    showSprintDetails: false
  };

  onShowClick = e => {
    this.setState({ showSprintDetails: !this.state.showSprintDetails });

  }

  componentDidMount() {
    const {openSprint} = this.props;
    const {sprint} = this.props;

    if (sprint.sprintnbr === openSprint) {
      this.setState({ showSprintDetails: !this.state.showSprintDetails });
    } 
 
  }

  render() {

    const {sprint} = this.props;
    const {showSprintDetails} = this.state;

    return (
        <div className="container" key={sprint.id}>
          <div className="cardsprint">
            <div className="cardsprintheader">
              <span>
                <strong>Sprint {sprint.sprintnbr} - {sprint.sprinttitle}</strong>
              </span>
              <span className="cardsprintheaderbutton">
                <button onClick={this.onShowClick}>
                  {showSprintDetails ? "Hide" : "Show" }
                </button>
              </span>
            </div>
            {showSprintDetails ? (
              <div className='cardsprintbody'>
                <div className="sprintlabel">Sprint Goals:</div>
                <ul>          
                  <React.Fragment>
                    {sprint.sprintgoals.map((goal, i)  => (
                      <li className="sprintdesc" key={i}>
                        { goal }
                      </li>
                    ))}
                  </React.Fragment>
                </ul>
                {sprint.sprintreview ? (
                  <React.Fragment>
                    <div className="sprintlabel">Sprint Review:</div>
                    <ul>          
                    <React.Fragment>
                        {sprint.sprintreview.map((note, i)  => (
                          <li className="sprintdesc" key={i}>
                            { note }
                          </li>
                        ))}
                      </React.Fragment>
                    </ul>
                  </React.Fragment>
                ) : null}
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

