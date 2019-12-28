import React, { Component } from 'react'

import '../App.css'
import Sprint from './Sprint'
import axios from '../axios-instance';

class Sprints extends Component {

  state = {
    sprints: null
  }

  componentDidMount() {
    axios.get('sprints.json')
      .then(response => {
        this.setState({ sprints: response.data});
      })
      .catch(error => {
        console.log('error fetching data from remote source...');
      })
  }
    

  render() {

    let allSprints = {};
    let sprintNbrs = [];
    var maxSprintNbr;

    if(this.state.sprints) {
      this.state.sprints.map((snbr,i) => (
        sprintNbrs.push(Number(snbr.sprintnbr))
      ))

      console.log('sprintNbrs length: ' + sprintNbrs.length);

      sprintNbrs.map((snbr,i) => (
        console.log('snbr: ' + snbr)
      ))

      maxSprintNbr = sprintNbrs.reduce(function(x,y) {
        return Math.max(x,y);
      });

      console.log('maxSprintNbr: ' + maxSprintNbr);


      this.state.sprints.sort(function(a,b) {
        return b.sprintnbr - a.sprintnbr;
      });

      allSprints = (
        <React.Fragment>
          {this.state.sprints.map((sprint,i) => (
            <Sprint sprint={sprint} openSprint={maxSprintNbr} key={i} />
          ))}
        </React.Fragment>
      );
    } else {
      allSprints = null;
    }

    return (
      <React.Fragment>
        {allSprints}
      </React.Fragment>
    )
  }
}

export default Sprints;

/*
const localTestDataSprints = [
{
  "id": 1,
  "sprintnbr": 1,
  "sprinttitle": "React Technical Debt",
  "sprintgoals": [
    "Clean up React applications - This 100 Day Challenge site and LandShark Park site"
  ],
  "sprintreview": [
    "To Be Determined"
  ],
  "days": [
    {
      "id": 101,
      "sprintDay": 1,
      "challengeDay": 1,
      "date": "20191226",
      "dayNotes": [
        "testing"
      ]
    },
    {
      "id": 102,
      "sprintDay": 2,
      "challengeDay": 2,
      "date": "20191227",
      "dayNotes": [
        "testing"
      ]
    }
  ]
},
{
  "id": 2,
  "sprintnbr": 2,
  "sprinttitle": "Docker",
  "sprintgoals": [
    "Learn Docker basics, configure, install, deploy and run Docker containers"
  ],
  "sprintreview": [
    "Containers are awesome, wish I could use them at my workplace"
  ],
  "days": [
    {
      "id": 201,
      "sprintDay": 1,
      "challengeDay": 11,
      "date": "20191231",
      "dayNotes": [
        "testing"
      ]
    }
  ]
},
{
  "id": 3,
  "sprintnbr": 3,
  "sprinttitle": "Apache Spark",
  "sprintgoals": [
    "Learn Apache Spark - configure and write programs"
  ],
  "sprintreview": [
    "Gobs and gobs of multitasking"
  ],
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
];
*/
