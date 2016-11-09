// current-game-v1.0
Meteor.methods({
    // GET /observer-mode/rest/consumer/getSpectatorGameInfo/{platformId}/{summonerId} Get current game information for the given summoner ID. (REST)
    // Return Value: CurrentGameInfo
    getGameInfoBySummonerId: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/observer-mode/rest/consumer/getSpectatorGameInfo/${v.region}/${v.summonerId}`));
    }
});
