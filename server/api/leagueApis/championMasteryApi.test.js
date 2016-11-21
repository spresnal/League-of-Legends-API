'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/championMasteryApi.js';

describe('championMasteryApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getChampionMasteryByPlayerIdAndChampionId', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getChampionMasteryByPlayerIdAndChampionId', {playerId: 1337, championId: 1338});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/championmastery/location/na/player/1337/champion/1338?api_key=undefined');
        });
    });

    describe('getAllChampionMasteriesByPlayerId', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getAllChampionMasteriesByPlayerId', {playerId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/championmastery/location/na/player/1337/champions?api_key=undefined');
        });
    });

    describe('getTotalChampionMasteryScoreByPlayerId', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getTotalChampionMasteryScoreByPlayerId', {playerId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/championmastery/location/na/player/1337/score?api_key=undefined');
        });
    });

    describe('getSpecifiedChampionMasteryEntriesByPlayerId', function () {
        it('succesfully builds the url - without count', function () {
            // act
            Meteor.call('getSpecifiedChampionMasteryEntriesByPlayerId', {playerId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/championmastery/location/na/player/1337/topchampions?api_key=undefined');
        });

        it('succesfully builds the url - with count', function () {
            // act
            Meteor.call('getSpecifiedChampionMasteryEntriesByPlayerId', {playerId: 1337, count: 10});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/championmastery/location/na/player/1337/topchampions?api_key=undefined&count=10');
        });
    });
});