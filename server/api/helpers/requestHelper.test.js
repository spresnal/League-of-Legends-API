import { expect } from 'meteor/practicalmeteor:chai';
import '/server/api/helpers/requestHelper.js';

describe('requestHelper', function () {
    it('sets default region to na', function () {
        // assert
        expect(requestHelper.apiRegion).to.equal('na');
    });

    it('succesfully builds the url when passed valid parameters', function () {
        // arrange
        var apiVersion = 'v1.0',
            testPath = 'test';

        // act
        var result = requestHelper.buildUrl(apiVersion, testPath);

        // assert
        expect(result).to.equal(`https://na.api.pvp.net/api/lol/na/${apiVersion}${testPath}?api_key=undefined`)
    });
})