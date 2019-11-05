import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
  state = {
    "sprints": [
      {
        "id": 1,
        "sprintnbr": 1,
        "sprinttitle": "First Sprint",
        "sprintgoals": "get this thing to work!!!",
        "sprintreview": "not there yet",
        "days": [
          {
            "id": 101,
            "sprintDay": 1,
            "challengeDay": 1,
            "date": "20190930",
            "dayNotes": [
              "Installed new Oracle VirtualBox VM",
              "Installed Node, NPM, Visual Studio Code and related software"
            ]
          },
          {
            "id": 102,
            "sprintDay": 2,
            "challengeDay": 2,
            "date": "20191001",
            "dayNotes": [
              "Created React project and initial days page"
            ]
          },
          {
            "id": 103,
            "sprintDay": 3,
            "challengeDay": 3,
            "date": "20191002",
            "dayNotes": [
              "Converted challenge day notes into an array",
              "Added Header and color fonts and background"
            ]
          }
        ]
      },
      {
        "id": 2,
        "sprintnbr": 2,
        "sprinttitle": "First Sprint",
        "sprintgoals": "get this thing to work!!!",
        "sprintreview": "not there yet",
        "days": [
          {
            "id": 201,
            "sprintDay": 1,
            "challengeDay": 11,
            "date": "20190930",
            "dayNotes": [
              "Installed new Oracle VirtualBox VM",
              "Installed Node, NPM, Visual Studio Code and related software"
            ]
          },
          {
            "id": 202,
            "sprintDay": 2,
            "challengeDay": 12,
            "date": "20191001",
            "dayNotes": [
              "Created React project and initial days page"
            ]
          },
          {
            "id": 203,
            "sprintDay": 3,
            "challengeDay": 13,
            "date": "20191002",
            "dayNotes": [
              "Converted challenge day notes into an array",
              "Added Header and color fonts and background"
            ]
          }
        ]
      }
    ]
  }

  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    )
  }

}

export const Consumer = Context.Consumer;
