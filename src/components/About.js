import React from 'react'

export default function About() {
    return (
        <div className="container">
            <p className='display-4'>About This Project</p>
            <hr />
            <div className="display-5">
                <p>Approximately a "70 Days of Code Challenge" - or "Whatever I can get done before the 2019 holidays"</p>
                <p>
                    Simple Goal:  Learn React by building a web site to journal a 100 Days of Code Challenge.
                </p>
                <p>
                    This site is a simple React application to journal steps building a larger React 
                    application.  This site loads all data at startup using React's Context API.   
                </p>
                <p>
                    The larger React application I am building will have a backend database, buttons and 
                    modules to retrieve, enter, update data.  The end goal is to have a site for an 
                    official 100 Days of Challenge ready in January 2020.
                </p>
                <p>
                    I plan to use a modified Agile format for the 100 Days of Code Challenge.  For "modified" 
                    Agile format, I'm thinking on the following: 
                </p>
                <ul>
                    <li>10 Sprints for 100 Days of Code Challenge</li>
                    <li>10 Days of Coding per Sprint</li>
                    <li>Each Sprint will have 14 Calendar days - 10 days of code, 4 "off days"</li>
                    <li>Sprint Planning - State high level goal(s) to accomplish during Sprint</li>
                    <li>Sprint Review - Quick notes for lessons learned, accomplishments</li>
                </ul>
                <p>
                    Note: The added "Agile format" is not meant to distract from coding exercises in the 
                    100 Days of Code Challenge.  Sprint Planing and Review are meant to be short, quick 
                    notes.  Agile format would help me set short term goals in addition to formatting 
                    organized journal entries for public posting.
                </p>
                <p>
                    Idea is to be done in December - Ready to start an official 100 Days of Code Challenge 
                    in January.  If I would have paid attention to the calendar in September, I would have 
                    known when to properly start the 100 days of code to finish before the end of the 
                    year.
                </p>
            </div>


        </div>
    )
}
