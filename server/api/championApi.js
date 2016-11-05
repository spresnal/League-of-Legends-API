const apiVersion = "v1.2";

Meteor.methods({
    getAllChampions: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/champion`));
    },
    getChampionById: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/champion/${v.championId}`));
    }
});
