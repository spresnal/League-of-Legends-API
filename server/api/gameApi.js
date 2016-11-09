// game-v1.3
Meteor.methods({
    // GET /api/lol/{region}/v1.3/game/by-summoner/{summonerId}/recent Get recent games by summoner ID. (REST)
    // Return Value: RecentGamesDto
    getRecentGamesBySummonerId: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/game/by-summoner/${v.summonerId}/recent`));
    }
});
