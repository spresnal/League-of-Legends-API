'use strict';

// featured-games-v1.0
Meteor.methods({
    // GET /observer-mode/rest/featured Get list of featured games. (REST)
    // Return Value: FeaturedGames
    getFeaturedGames: function () {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildFullUrl(`/observer-mode/rest/featured`));
    }
});
