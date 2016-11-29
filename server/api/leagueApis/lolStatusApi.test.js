'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/leagueApis/lolStatusApi.js';

describe('lolStatusApi', function () {
    var stub;

    beforeEach(function(){
        stub = sinon.stub(Meteor.http, 'call');
    });

    afterEach(function(){
        Meteor.http.call.restore();
    });

    describe('getShards', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getShards');

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/shards?api_key=undefined');
        });
    });

    describe('getShardStatusById', function () {
        it('succesfully builds the url', function () {
            // act
            Meteor.call('getShardStatusById', {shardId: 1337});

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.getCall(0).args[0]).to.equal('GET');
            expect(stub.getCall(0).args[1]).to.equal('https://na.api.pvp.net/shards/1337?api_key=undefined');
        });
    });
});