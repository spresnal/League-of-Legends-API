# league-of-legends-seed — the seed for League of Legends apps
This project is an application skeleton for a typical League of Legends web app. You can use it to quickly bootstrap your webapp project.

Built using <b>Meteor 1.4.2</b> and <b>AngularJS 1.5.8</b>. The seed contains calls for all League of Legends REST endpoints <i>(incomplete)</i>.

## Prerequisites
You need git to clone the repository. You can get git from http://git-scm.com/. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/. Once you have npm, you need to install Meteor version 1.4.2 found here https://www.meteor.com/. Lastly, install the project dependencies by running `meteor npm install` from the project directory.

## Getting Started
1. Create a "settings.json" file in the outermost directory (where the package.json file is located)
2. Add this to settings.json and save: 
  ```
  {"leagueApiKey": "YOUR_API_KEY_HERE"}
  ```
3. Run meteor using:
  ```
  npm start
  ```

## Running Unit Tests
1. Use the command `meteor test --driver-package practicalmeteor:mocha`
2. Open http://localhost:3000 in your web-browser. Refresh the page to run the tests again.
