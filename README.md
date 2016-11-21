# league-of-legends-seed [![Build Status](https://travis-ci.org/spresnal/league-of-legends-seed.svg?branch=Basic-Setup)](https://travis-ci.org/spresnal/league-of-legends-seed) — the seed for League of Legends apps
This project is an application skeleton for a typical League of Legends web app. You can use it to quickly bootstrap your webapp project.

Built using <b>Meteor 1.4.2</b> and <b>AngularJS 1.5.8</b>. The seed contains calls for all League of Legends REST endpoints.

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

## Testing
Reference [meteor testing](https://guide.meteor.com/testing.html) for general information about testing meteor. In addition, check out the meteor package [dispatch:mocha-phantomjs](https://atmospherejs.com/dispatch/mocha-phantomjs) and [mocha](https://github.com/mochajs/mocha) for information about the test framework. To read about unit testing syntax go to [chai](http://chaijs.com/api/bdd/).

###Running the unit test suite
* Use the command 
  ```
  npm run test
  ```
  or 
  ```
  npm run test:watch
  ```
  (auto runs the tests after making updates)

###Running the linter
* Use the command
  ```
  npm run linter
  ```

## API Calls <i>(Only Listing Tested Methods)</i>
### championApi
+ getAllChampions
+ getChampionById

### championMasteryApi
+ getChampionMasteryByPlayerIdAndChampionId
+ getAllChampionMasteriesByPlayerId
+ getTotalChampionMasteryScoreByPlayerId
+ getSpecifiedChampionMasterEntriesByPlayerId
  - without count
  - with count

### currentGameApi
+ getGameInfoBySummonerId

### featuredGamesApi
+ getFeaturedGames

### gameApi
+ getRecentGamesBySummonerId

### leagueApi
+ getLeaguesBySummonerIds
+ getLeagueEntriesBySummonerIds
+ getLeaguesByTeamIds
+ getLeagueEntriesByTeamIds
+ getChallengerLeagues
+ getMasterLeagues