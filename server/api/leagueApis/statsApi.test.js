'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/statsApi.js';

describe('statsApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getRankedStatsBySummonerId', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getRankedStatsBySummonerId', {summonerId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/1337/ranked?api_key=undefined');
        });
    });

    describe('getPlayerStatsBySummonerId', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getPlayerStatsBySummonerId', {summonerId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/1337/summary?api_key=undefined');
        });
    });
});