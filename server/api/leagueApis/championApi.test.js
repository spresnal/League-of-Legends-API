'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/championApi.js';

describe('championApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getAllChampions', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getAllChampions');

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=undefined');
        });
    });

    describe('getChampionById', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getChampionById', {championId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.2/champion/1337?api_key=undefined');
        });
    });
});