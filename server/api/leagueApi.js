const apiVersion = "v2.5";

// league-v2.5
Meteor.methods({
    // GET /api/lol/{region}/v2.5/league/by-summoner/{summonerIds} Get leagues mapped by summoner ID for a given list of summoner IDs. (REST)
    // Return Value: Map[string, List[LeagueDto]]
    getLeaguesBySummonerIds: function (v) {
        // this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/league/by-summoner/${v.summonerIds}`));
    },
    // GET /api/lol/{region}/v2.5/league/by-summoner/{summonerIds}/entry Get league entries mapped by summoner ID for a given list of summoner IDs. (REST)
    // Return Value: Map[string, List[LeagueDto]]
    getLeagueEntriesBySummonerIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/league/by-summoner/${v.summonerIds}/entry`));
    },
    // GET /api/lol/{region}/v2.5/league/by-team/{teamIds} Get leagues mapped by team ID for a given list of team IDs. (REST)
    // Return Value: Map[string, List[LeagueDto]]
    getLeaguesByTeamIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/league/by-team/${v.teamIds}`));
    },
    // GET /api/lol/{region}/v2.5/league/by-team/{teamIds}/entry Get league entries mapped by team ID for a given list of team IDs. (REST)
    // Return Value: Map[string, List[LeagueDto]]
    getLeagueEntriesByTeamIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/league/by-team/${v.teamIds}/entry`));
    },
    // GET /api/lol/{region}/v2.5/league/challenger Get challenger tier leagues. (REST)
    // Return Value: LeagueDto
    getChallengerLeagues: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/league/challenger`));
    },
    // GET /api/lol/{region}/v2.5/league/master Get master tier leagues. (REST)
    // Return Value: LeagueDto
    getMasterLeagues: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/league/master`));
    }
});
