const apiVersion = "v2.2";

// match-v2.2
Meteor.methods({
    // GET /api/lol/{region}/v2.2/match/{matchId} Retrieve match by match ID. (REST)
    // Return Value: MatchDetail
    getMatchById: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/match/${v.matchId}`));
    }
});
