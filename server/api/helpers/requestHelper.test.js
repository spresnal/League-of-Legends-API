'use strict';

import { expect } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import '/server/api/helpers/requestHelper.js';

describe('requestHelper', function () {
    it('sets default region to na', function () {
        // assert
        expect(requestHelper.apiRegion).to.equal('na');
    });

    describe('pathIsValid', function() { 
        it('returns null when path is not prepended with a "/"', function () {
            // arrange
            var testPath = 'test';

            // act
            var result = requestHelper.pathIsValid(testPath);

            // assert
            expect(result).to.be.null;
        });

        it('returns null when path is prepended with a "/", but not followed with other characters', function () {
            // arrange
            var testPath = '/';

            // act
            var result = requestHelper.pathIsValid(testPath);

            // assert
            expect(result).to.be.null;
        });
    });

    describe('buildUrl', function () {
        it('succesfully builds the url when passed valid parameters', function () {
            // arrange
            var apiVersion = 'v1.0',
                testPath = '/test';

            // act
            var result = requestHelper.buildUrl(apiVersion, testPath);

            // assert
            expect(result).to.equal(`https://na.api.pvp.net/api/lol/na/${apiVersion}${testPath}?api_key=undefined`);
        });

        it('returns null when null path passed in', function () {
            // arrange
            var apiVersion = 'v1.0',
                testPath = null;

            // act
            var result = requestHelper.buildUrl(apiVersion, testPath);

            // assert
            expect(result).to.be.null;
        });
    });

    describe('buildFullUrl', function () {
        it('succesfully builds the url when passed valid parameters', function () {
            // arrange
            var testPath = '/test';

            // act
            var result = requestHelper.buildFullUrl(testPath);

            // assert
            expect(result).to.equal(`https://na.api.pvp.net${testPath}?api_key=undefined`);
        });

        it('returns null when null path passed in', function () {
            // arrange
            var apiVersion = 'v1.0',
                testPath = null;

            // act
            var result = requestHelper.buildFullUrl(apiVersion, testPath);

            // assert
            expect(result).to.be.null;
        });
    });

    describe('call', function () {
        afterEach(function(){
            Meteor.http.call.restore();
        });

        it('GET: succesfully uses Meteors built in http call', function () {
            // arrange
            var stub = sinon.stub(Meteor.http, 'call'),
                protocol = 'GET',
                testPath = 'http://www.testPath.com';

            // act
            requestHelper.call(protocol, testPath);

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.calledWith(protocol, testPath)).to.be.true;
        });

        it('POST: succesfully uses Meteors built in http call', function () {
            // arrange
            var stub = sinon.stub(Meteor.http, 'call'),
                protocol = 'POST',
                testPath = 'http://www.testPath.com',
                body = 'test';

            // act
            requestHelper.call(protocol, testPath, body);

            // assert
            expect(stub.calledOnce).to.be.true;
            expect(stub.calledWith(protocol, testPath, body)).to.be.true;
        });
    });

    describe('Meteor updateSummonerRegion', function () {
        var region;

        beforeEach(function(){
            region = requestHelper.apiRegion;
        });

        afterEach(function(){
            requestHelper.apiRegion = region;
        });

        it('succesfully sets the passed in region', function () {
            // arrange
            var testRegion = 'test';

            // act
            Meteor.call('updateSummonerRegion', testRegion);

            // assert
            expect(requestHelper.apiRegion).to.equal(testRegion);
        });
    });
})