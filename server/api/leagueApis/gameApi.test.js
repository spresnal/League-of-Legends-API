'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/gameApi.js';

describe('gameApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getRecentGamesBySummonerId', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getRecentGamesBySummonerId', {summonerId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/1337/recent?api_key=undefined');
        });
    });
});