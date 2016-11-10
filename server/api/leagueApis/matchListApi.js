const apiVersion = "v2.2";

// matchlist-v2.2
Meteor.methods({
    // GET /api/lol/{region}/v2.2/matchlist/by-summoner/{summonerId} Retrieve match list by summoner ID. (REST)
    // Return Value: MatchList
    getMatchListBySummoner: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/matchlist/by-summoner/${v.summonerId}`));
    }
});
