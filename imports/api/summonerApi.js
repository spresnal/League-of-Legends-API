import { Meteor } from 'meteor/meteor';
import '../api/helpers/requestHelper.js';

const apiVersion = "v1.4";

Meteor.methods({
    getSummonersByNames: function (v) {
        this.unblock();
        return Meteor.http.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/by-name/${v.summoners}`));
    },
    getSummonersByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}`));
    },
    getSummonersNamesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}/name`));
    },
    getSummonersMasteriesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}/masteries`));
    },
    getSummonersRunesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', requestHelper.buildUrl(apiVersion, `/summoner/${v.summonerIds}/runes`));
    }
});
