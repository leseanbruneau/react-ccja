import React from 'react'

export default function About() {
  return (
    <div className="container">
      <p className='display-4'>Contact Information</p>
      <div className="row ml-3">
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fas fa-laptop"></i>
          <a href="http://leseanbruneau.com" target="_blank" rel="noopener noreferrer">Website</a>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fas fa-rss"></i>
          <a href="https://medium.com/@leseanbruneau" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fab fa-twitter"></i>
          <a href="https://twitter.com/leseanbruneau" target="_blank" rel="noopener noreferrer">@leseanbruneau</a>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fab fa-github"></i>
          <a href="https://github.com/leseanbruneau/react-ccja" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
      <hr />
      <p className='display-4'>My "Planned" Structure</p>
      <hr />
      <div className="display-5">
        <ul>
            <li>10 Sprints for 100 Days of Code Challenge</li>
            <li>10 Days of Coding per Sprint</li>
            <li>Sprint Planning - State high level goal(s) to accomplish during Sprint</li>
            <li>Sprint Review - Quick notes for lessons learned, accomplishments</li>
        </ul>
        <p>
            Note: The added "Agile format" is not meant to distract from coding exercises in the 
            100 Days of Code Challenge.  Sprint Planing and Review are meant to be short, quick 
            notes.  Agile format would help me set short term goals in addition to formatting 
            organized journal entries for public posting.
        </p>
      </div>
      <br></br>
      <p className='display-4'>Goals For This Project</p>
      <hr />
      <div className="display-5">
          <p>Going to keep it a bit simple in this challenge.</p>
          <br></br>
          <h3><a href="http://spark.apache.org/" target="_blank" rel="noopener noreferrer">Apache Spark</a></h3>
          <p>
            Just write gobs and gobs of Spark programs and see what happens.  I do not have a specific project 
            in mind when I start this code challenge.  If project develops, then will add to challenge.  
          </p>
          <br></br>
          <h3><a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Apache Kafka</a></h3>
          <p>
              I know the theory with pub/sub messaging systems.  I want to set up and code some examples.  
          </p>
          <br></br>
          <h3><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></h3>
          <p>
              Might occassionally jump over to do some specific React tasks for some other side projects.  
          </p>
          <br></br>
          <h3>Quick Final Thought</h3>
          <p>
            I don't really have much more to add here.  If I think of something, will add later.  
            Thanks for stopping by - Have a great day!
          </p>
          <br></br>
      </div>
    </div>
  )
}



