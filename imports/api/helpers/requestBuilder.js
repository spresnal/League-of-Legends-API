const apiKey = Meteor.settings.leagueApiKey;
const apiVersion = "v1.4";
const apiRegion = "na";

buildUrl = function(path){
    return `https://${apiRegion}.api.pvp.net/api/lol/${apiRegion}/${apiVersion}${path}?api_key=${apiKey}`
}