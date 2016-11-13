import { expect } from 'meteor/practicalmeteor:chai';
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
    });
})