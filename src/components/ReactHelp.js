import React from 'react'

export default function ReactHelp() {
    return (
        <div className="container">
            <p className='display-4'>React Tips and Tricks</p>
            <hr />
            <p><strong>Deploy React application to Google Firebase project</strong></p>
            <p>I create two separate directories on virtual machine </p>
            <ul>
              <li>React application (%%app_root_directory%%)</li>
              <li>Firebase deployment directory (%%fb_deploy_directory%%)</li>
            </ul>
            <p>To create production deployment build files:  Linux commands from %%app_root_directory%%</p>
            <ul>
                <li><strong>npm run build</strong></li>
                <li><strong>cp -r build/* %%fb_deploy_directory%%</strong></li>
            </ul>
            <p>Linux commands from %%fb_deploy_directory%% </p>
            <ul>
              <li><strong>firebase login</strong></li>
              <li><strong>firebase init</strong></li>
              <li><strong>firebase deploy</strong></li>
              <li><strong>firebase logout</strong></li>
            </ul>
            <br />
            <p><strong>React - Create new React application</strong></p>
            <p>Create new React application: </p>
            <p class="px-4"><strong>npx create-react-app %%react-app-name%%</strong> </p>
            <p>where %%react-app-name%% is name of new React project.</p>
            <br />
            <p><strong>Sample - Possible node packages to install</strong></p>
            <ul>
                <li><strong>npm i bootstrap</strong></li>
                <li><strong>npm i react-dom</strong></li>
                <li><strong>npm i react-router-dom</strong></li>
                <li><strong>npm i axios</strong></li>
            </ul>
            <br />
            <p><strong>Google Firebase - Simple Static Website Hosting</strong></p>
            <p class="px-4">If you have a gmail account, then you are already set up.  Go to Firebase Console 
              screen <a href="https://firebase.google.com/" >
                Firebase Console screen
              </a> and login with your gmail account credentials.  Once logged in, you can create a new project to get started.
            </p>
            <br />
            <p className='display-5'><strong>Linux Environment Setup</strong></p>
            <br />
            <p><strong>Virtual Machine Install</strong></p>
            <a href="https://medium.com/@leseanbruneau/install-and-configure-ubuntu-workstation-virtual-machine-f5443cd83259" >
                Oracle VirtualBox - Virtual Machine setup (Ubuntu)
            </a>
            <br /> <br />
            <p><strong>Command line / Node / NPM</strong></p>
            <p>Linux command to fix for that stupid "ENOSPC: System limit for number of file watchers reached" error message:</p>
            <p class="px-4"><strong>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p</strong></p>
            <br />
            <p><strong>Visual Studio Code</strong></p>
            <p>Extensions to install</p>
            <ul>
                <li>ES7 React/Redux/GraphQL/React-native snippets</li>
            </ul>
            <br />
        </div>
    )
}