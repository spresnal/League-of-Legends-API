'use strict';

// lol-status-v1.0
Meteor.methods({
    // GET /shards Get shard list. (REST)
    // Return Value: List[Shard]
    getShards: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(`/shards`));
    },
    // GET /shards/{shard} Get shard status. Returns the data available on the status.leagueoflegends.com website for the given region. (REST)
    // Return Value: ShardStatus
    getShardStatusById: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/shards/${v.shard}`));
    }
});
