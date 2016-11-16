'use strict';

const apiVersion = "v1.3";

// game-v1.3
Meteor.methods({
    // GET /api/lol/{region}/v1.3/game/by-summoner/{summonerId}/recent Get recent games by summoner ID. (REST)
    // Return Value: RecentGamesDto
    getRecentGamesBySummonerId: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/game/by-summoner/${v.summonerId}/recent`));
    }
});
