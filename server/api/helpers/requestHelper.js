requestHelper = (function(pub) { 
    const apiKey = Meteor.settings.leagueApiKey,
        apiRegion = "na";
    var expose = {};

    expose.buildUrl = function(apiVersion, path){
        return `https://${apiRegion}.api.pvp.net/api/lol/${apiRegion}/${apiVersion}${path}?api_key=${apiKey}`
    }

    //callType: GET, PUT, POST etc.
    //url: Built url ready to be used
    expose.call = function(callType, url){
        console.log(`${callType} ${url}`)
        return Meteor.http.call(callType, url);
    }

    return expose;
}());