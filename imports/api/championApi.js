import { Meteor } from 'meteor/meteor';
import '../api/helpers/requestBuilder.js';

const apiVersion = "v1.2";

Meteor.methods({
    getAllChampions: function () {
        this.unblock();
        return Meteor.http.call('GET', buildUrl(apiVersion, `/champion`));
    },
    getChampionById: function (v) {
        this.unblock();
        return Meteor.http.call('GET', buildUrl(apiVersion, `/champion/${v.championId}`));
    }
});
