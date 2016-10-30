import { Meteor } from 'meteor/meteor';
import '../api/helpers/requestBuilder.js';

Meteor.methods({
    getSummonersByNames: function (v) {
        this.unblock();
        return Meteor.http.call('GET', `${buildUrl(v.region, '/summoner/by-name/', v.summoners)}`);
    },
    getSummonersByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', 'https://'+v.region+'.api.pvp.net/api/lol/'+v.region+'/v1.4/summoner/'+v.summonerIds+'?api_key='+apiKey);
    },
    getSummonersNamesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', 'https://'+v.region+'.api.pvp.net/api/lol/'+v.region+'/v1.4/summoner/'+v.summonerIds+'/name?api_key='+apiKey);
    },
    getSummonersMasteriesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', 'https://'+v.region+'.api.pvp.net/api/lol/'+v.region+'/v1.4/summoner/'+v.summonerIds+'/masteries?api_key='+apiKey);
    },
    getSummonersRunesByIds: function (v) {
        this.unblock();
        return Meteor.http.call('GET', 'https://'+v.region+'.api.pvp.net/api/lol/'+v.region+'/v1.4/summoner/'+v.summonerIds+'/runes?api_key='+apiKey);
    }
});
