requestHelper = (function() { 
    const apiKey = Meteor.settings.leagueApiKey;
    var expose = {};

    // Default to NA
    expose.apiRegion = "na";

    // Builder for most commonly used url base
    expose.buildUrl = function(apiVersion, path){
        return `https://${expose.apiRegion}.api.pvp.net/api/lol/${expose.apiRegion}/${apiVersion}${path}?api_key=${apiKey}`;
    }

    // Builder for uncommon url
    expose.buildFullUrl = function(path){
        return `https://${expose.apiRegion}.api.pvp.net${path}?api_key=${apiKey}`;
    }

    // callType: GET, PUT, POST etc.
    // url: Built url ready to be used
    // body: Body when doing PUT/POST
    expose.call = function(callType, url, body){
        console.log(`${callType} ${url}`)
        return Meteor.http.call(callType, url, body);
    }

    return expose;
}());

Meteor.methods({
    updateSummonerRegion: function (region) {
        requestHelper.apiRegion = region;
        console.log(requestHelper.apiRegion);
    }
});