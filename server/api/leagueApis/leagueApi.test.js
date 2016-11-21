'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/leagueApi.js';

describe('leagueApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getLeaguesBySummonerIds', function () {
        it('succesfully builds the url', function () {
            // ac
            Meteor.call('getLeaguesBySummonerIds', {summonerIds: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/1337?api_key=undefined');
        });
    });
    
    describe('getLeagueEntriesBySummonerIds', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getLeagueEntriesBySummonerIds', {summonerIds: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/1337/entry?api_key=undefined');
        });
    });
    
    describe('getLeaguesByTeamIds', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getLeaguesByTeamIds', {teamIds: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v2.5/league/by-team/1337?api_key=undefined');
        });
    });
    
    describe('getLeagueEntriesByTeamIds', function () {
        it('succesfully builds the url', function () {
            // act/league/by-team/1337
            Meteor.call('getLeagueEntriesByTeamIds', {teamIds: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v2.5/league/by-team/1337/entry?api_key=undefined');
        });
    });
    
    describe('getChallengerLeagues', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getChallengerLeagues');

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?api_key=undefined');
        });
    });
    
    describe('getMasterLeagues', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getMasterLeagues');

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v2.5/league/master?api_key=undefined');
        });
    });
});