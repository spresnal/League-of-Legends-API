requestHelper = (function(pub) { 
    const apiKey = Meteor.settings.leagueApiKey;
    var apiRegion = "na",
        expose = {};

    expose.setRegion = function(newRegion){
        apiRegion = newRegion;
    }

    // Builder for most commonly used url base
    expose.buildUrl = function(apiVersion, path){
        return `https://${apiRegion}.api.pvp.net/api/lol/${apiRegion}/${apiVersion}${path}?api_key=${apiKey}`;
    }

    // Builder for uncommon url
    expose.buildFullUrl = function(path){
        return `https://${apiRegion}.api.pvp.net${path}?api_key=${apiKey}`;
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