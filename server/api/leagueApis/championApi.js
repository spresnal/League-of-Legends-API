'use strict';

const apiVersion = "v1.2";

// champion-v1.2
Meteor.methods({
    // GET /api/lol/{region}/v1.2/champion Retrieve all champions. (REST)
    // Return Value: ChampionListDto
    getAllChampions: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/champion`));
    },
    // GET /api/lol/{region}/v1.2/champion/{id} Retrieve champion by ID. (REST)
    // Return Value: ChampionDto
    getChampionById: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/champion/${v.championId}`));
    }
});
