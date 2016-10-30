import { Meteor } from 'meteor/meteor';
import '../api/helpers/requestBuilder.js';

Meteor.methods({
    getSummonersByNames: function (v) {
        this.unblock();
        return Meteor.http.call('GET', buildUrl(`/summoner/by-name/${v.summoners}`));
    },
    getSummonersByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', buildUrl(`/summoner/${v.summonerIds}`));
    },
    getSummonersNamesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', buildUrl(`/summoner/${v.summonerIds}/name`));
    },
    getSummonersMasteriesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', buildUrl(`/summoner/${v.summonerIds}/masteries`));
    },
    getSummonersRunesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', buildUrl(`/summoner/${v.summonerIds}/runes`));
    }
});
