'use strict';

const apiVersion = "v2.4";

// team-v2.4
Meteor.methods({
    // GET /api/lol/{region}/v2.4/team/by-summoner/{summonerIds} Get teams mapped by summoner ID for a given list of summoner IDs. (REST)
    // Return Value: Map[string, List[TeamDto]]
    getTeamsBySummonerIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/team/by-summoner/${v.summonerIds}`));
    },
    // GET /api/lol/{region}/v2.4/team/{teamIds} Get teams mapped by team ID for a given list of team IDs. (REST)
    // Return Value: Map[string, TeamDto]
    getTeamsByTeamIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/team/${v.teamIds}`));
    }
});
