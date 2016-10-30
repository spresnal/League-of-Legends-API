const apiKey = Meteor.settings.leagueApiKey;
const apiRegion = "na";

buildUrl = function(apiVersion, path){
    return `https://${apiRegion}.api.pvp.net/api/lol/${apiRegion}/${apiVersion}${path}?api_key=${apiKey}`
}