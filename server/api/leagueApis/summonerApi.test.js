'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/summonerApi.js';

describe('summonerApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getSummonersByNames', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getSummonersByNames', {summonerNames: 'test1,test2'});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/test1,test2?api_key=undefined');
        });
    });

    describe('getSummonersByIds', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getSummonersByIds', {summonerIds: '1337,1338,1339'});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.4/summoner/1337,1338,1339?api_key=undefined');
        });
    });

    describe('getSummonersNamesByIds', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getSummonersNamesByIds', {summonerIds: '1337,1338,1339'});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.4/summoner/1337,1338,1339/name?api_key=undefined');
        });
    });

    describe('getSummonersMasteriesByIds', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getSummonersMasteriesByIds', {summonerIds: '1337,1338,1339'});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.4/summoner/1337,1338,1339/masteries?api_key=undefined');
        });
    });

    describe('getSummonersRunesByIds', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getSummonersRunesByIds', {summonerIds: '1337,1338,1339'});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.4/summoner/1337,1338,1339/runes?api_key=undefined');
        });
    });      
});