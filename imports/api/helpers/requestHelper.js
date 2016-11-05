requestHelper = (function(pub) { 
    const apiKey = Meteor.settings.leagueApiKey,
        apiRegion = "na";
    var expose = {};

    expose.buildUrl = function(apiVersion, path){
        return `https://${apiRegion}.api.pvp.net/api/lol/${apiRegion}/${apiVersion}${path}?api_key=${apiKey}`
    }

    return expose;
}());