const apiVersion = "v1.3";

// stats-v1.3
Meteor.methods({
    // GET /api/lol/{region}/v1.3/stats/by-summoner/{summonerId}/ranked Get ranked stats by summoner ID. (REST)
    // Return Value: RankedStatsDto
    getRankedStatsBySummonerId: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/stats/by-summoner/${v.summonerId}/ranked`));
    },
    // GET /api/lol/{region}/v1.3/stats/by-summoner/{summonerId}/summary Get player stats summaries by summoner ID. (REST)
    // Return Value: PlayerStatsSummaryListDto
    getPlayerStatsBySummonerId: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/stats/by-summoner/${v.summonerId}/summary`));
    }
});
