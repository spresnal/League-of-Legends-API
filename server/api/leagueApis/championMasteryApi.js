// championmastery
Meteor.methods({
    // GET /championmastery/location/{location}/player/{playerId}/champion/{championId} Get a champion mastery by player id and champion id. Response code 204 means there were no masteries found for given player id or player id and champion id combination. (RPC)
    // Return Value: ChampionMasteryDTO
    getChampionMasteryByPlayerIdAndChampionId: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/championmastery/location/${requestHelper.apiRegion}/player/${v.playerId}/champion/${v.championId}`));
    },
    // GET /championmastery/location/{location}/player/{playerId}/champions Get all champion mastery entries sorted by number of champion points descending (RPC)
    // Return Value: List[ChampionMasteryDTO]
    getAllChampionMasteriesByPlayerId: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/championmastery/location/${requestHelper.apiRegion}/player/${v.playerId}/champions`));
    },
    // GET /championmastery/location/{location}/player/{playerId}/score Get a player's total champion mastery score, which is sum of individual champion mastery levels (RPC)
    // Return Value: int
    getTotalChampionMasteryScoreByPlayerId: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/championmastery/location/${requestHelper.apiRegion}/player/${v.playerId}/score`));
    },
    // GET /championmastery/location/{location}/player/{playerId}/topchampions Get specified number of top champion mastery entries sorted by number of champion points descending (RPC)
    // Return Value: List[ChampionMasteryDTO]
    //
    // Note: Count parameter is optional. Defaults to 3 if not present.
    getSpecifiedChampionMasterEntriesByPlayerId: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/championmastery/location/${requestHelper.apiRegion}/player/${v.playerId}/topchampions${v.count ? `?count=${v.count}` : ''}`));
    }
});
