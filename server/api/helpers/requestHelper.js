requestHelper = (function() { 
    'use strict';   
    const apiKey = Meteor.settings.leagueApiKey;
    var expose = {};

    // Default to NA
    expose.apiRegion = "na";

    expose.pathIsValid = function(path){
        // Path must start with a '/' and be followed by characters
        var pathFormat = '^\/.+';
        if(path && path.match(pathFormat))
        {
            return path;
        }
        console.log(`Error: Improperly formatted path: ${path}`);
        return null;
    };

    // Builder for most commonly used url base
    expose.buildUrl = function(apiVersion, path, optionalParams){
        if(expose.pathIsValid(path))
        {
            return appendOptionalParameters(`https://${expose.apiRegion}.api.pvp.net/api/lol/${expose.apiRegion}/${apiVersion}${path}?api_key=${apiKey}`, optionalParams);
        }
        return null;
    };

    // Builder for uncommon url
    expose.buildFullUrl = function(path, optionalParams){
        if(expose.pathIsValid(path))
        {
            return appendOptionalParameters(`https://${expose.apiRegion}.api.pvp.net${path}?api_key=${apiKey}`, optionalParams);
        }
        return null;
    };

    // callType: GET, PUT, POST etc.
    // url: Built url ready to be used
    // body: Body when doing PUT/POST
    expose.call = function(callType, url, body){
        console.log(`${callType} ${url}`);
        return Meteor.http.call(callType, url, body);
    };

    // private method
    var appendOptionalParameters = function(path, keyValueUrlParams){
        if(keyValueUrlParams){
            for(var key in keyValueUrlParams){
                if(keyValueUrlParams.hasOwnProperty(key)){
                    path += `&${key}=${keyValueUrlParams[key]}`;
                }
            }
        }
        return path;
    }

    return expose;
}());

Meteor.methods({
    updateSummonerRegion: function (region) {
        'use strict';
        requestHelper.apiRegion = region;
    }
});