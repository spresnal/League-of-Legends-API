const apiVersion = "v1.4";

// summoner-v1.4
Meteor.methods({
    // GET /api/lol/{region}/v1.4/summoner/by-name/{summonerNames} Get summoner objects mapped by standardized summoner name for a given list of summoner names. (REST)
    // Return Value: Map[string, SummonerDto]
    getSummonersByNames: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/by-name/${v.summoners}`));
    },
    // GET /api/lol/{region}/v1.4/summoner/{summonerIds} Get summoner objects mapped by summoner ID for a given list of summoner IDs. (REST)
    // Return Value: Map[string, SummonerDto]
    getSummonersByIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}`));
    },
    // GET /api/lol/{region}/v1.4/summoner/{summonerIds}/masteries Get mastery pages mapped by summoner ID for a given list of summoner IDs (REST)
    // Return Value: Map[string, MasteryPagesDto]
    getSummonersNamesByIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}/name`));
    },
    // GET /api/lol/{region}/v1.4/summoner/{summonerIds}/name Get summoner names mapped by summoner ID for a given list of summoner IDs. (REST)
    // Return Value: Map[string, string]
    getSummonersMasteriesByIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}/masteries`));
    },
    // GET /api/lol/{region}/v1.4/summoner/{summonerIds}/runes Get rune pages mapped by summoner ID for a given list of summoner IDs. (REST)
    // Return Value: Map[string, RunePagesDto]
    getSummonersRunesByIds: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}/runes`));
    }
});
