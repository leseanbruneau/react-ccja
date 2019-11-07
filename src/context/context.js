import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
  state = {
    "sprints": [
      {
        "id": 1,
        "sprintnbr": 1,
        "sprinttitle": "Python",
        "sprintgoals": "Read and write files, libraries",
        "sprintreview": "Python programs and libraries worked",
        "days": [
          {
            "id": 101,
            "sprintDay": 1,
            "challengeDay": 1,
            "date": "20190930",
            "dayNotes": [
              "Wrote Python Hello World program",
              "Python program to read text file"
            ]
          },
          {
            "id": 102,
            "sprintDay": 2,
            "challengeDay": 2,
            "date": "20191001",
            "dayNotes": [
              "Some other Python stuff"
            ]
          },
          {
            "id": 110,
            "sprintDay": 10,
            "challengeDay": 10,
            "date": "20191002",
            "dayNotes": [
              "OK, so I may have skipped a few days for this example",
              "Will be a pattern in future sprints for this example program"
            ]
          }
        ]
      },
      {
        "id": 2,
        "sprintnbr": 2,
        "sprinttitle": "Docker",
        "sprintgoals": "Learn Docker basics, configure, install, deploy and run Docker containers",
        "sprintreview": "Containers are awesome, wish I could use them at my workplace",
        "days": [
          {
            "id": 201,
            "sprintDay": 1,
            "challengeDay": 11,
            "date": "20190930",
            "dayNotes": [
              "Something to do with Docker",
              "Wrote first Docker compose file"
            ]
          },
          {
            "id": 210,
            "sprintDay": 10,
            "challengeDay": 20,
            "date": "20191002",
            "dayNotes": [
              "Quick Sprint - that went fast"
            ]
          }
        ]
      },
      {
        "id": 3,
        "sprintnbr": 3,
        "sprinttitle": "Apache Spark",
        "sprintgoals": "Learn Apache Spark - configure and write programs",
        "sprintreview": "Gobs and gobs of multitasking",
        "days": [
          {
            "id": 301,
            "sprintDay": 1,
            "challengeDay": 31,
            "date": "20190930",
            "dayNotes": [
              "More examples",
              "Busy first day",
              "One more comment"
            ]
          },
          {
            "id": 310,
            "sprintDay": 10,
            "challengeDay": 40,
            "date": "20191002",
            "dayNotes": [
              "Got to thank the team for this - could not have finished this sprint without all the hard working nodes out there",
              "End of examples"
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
