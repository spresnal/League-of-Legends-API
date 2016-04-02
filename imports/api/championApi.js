import { Meteor } from 'meteor/meteor';

const apiKey = Meteor.settings.leagueApiKey;

Meteor.methods({
    getChampionById: function () {
        this.unblock();
        return Meteor.http.call('GET', 'http://search.twitter.com/search.json?q=perkytweets');
    }
});
