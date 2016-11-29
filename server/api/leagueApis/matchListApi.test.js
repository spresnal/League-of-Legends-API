'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/matchListApi.js';

describe('matchListApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getMatchListBySummonerId', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getMatchListBySummonerId', {summonerId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/1337?api_key=undefined');
        });
    });
});