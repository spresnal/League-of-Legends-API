const apiKey = Meteor.settings.leagueApiKey;
const apiVersion = "v1.4";

buildUrl = function(region, path, values){
    return `https://${region}.api.pvp.net/api/lol/${region}/${apiVersion}${path}${values}?api_key=${apiKey}`
}