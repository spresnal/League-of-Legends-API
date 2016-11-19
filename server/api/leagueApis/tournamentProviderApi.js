'use strict';

const apiVersion = "v1";

// tournament-provider-v1
Meteor.methods({
    // POST /tournament/public/v1/code Create a tournament code for the given tournament. (REST)
    // Return Value: List[string]
    createTournamentCode: function (v) {
        this.unblock();
        return requestHelper.call('POST', requestHelper.buildUrl(apiVersion, `/tournament/public/${apiVersion}/code`, v.message));
    },
    // GET /tournament/public/v1/code/{tournamentCode} Returns the tournament code DTO associated with a tournament code string. (REST)
    // Return Value: TournamentCodeDTO
    getTournamentByCode: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/tournament/public/${apiVersion}/code/${v.tournamentCode}`));
    },
    // PUT /tournament/public/v1/code/{tournamentCode} Update the pick type, map, spectator type, or allowed summoners for a code (REST)
    // Return Value: Void
    updateTournamentByCode: function (v) {
        this.unblock();
        return requestHelper.call('PUT', requestHelper.buildUrl(apiVersion, `/tournament/public/${apiVersion}/code/${v.tournamentCode}`, v.message));
    },
    // GET /tournament/public/v1/lobby/events/by-code/{tournamentCode} Gets a list of lobby events by tournament code (REST)
    // Return Value: LobbyEventDTOWrapper
    getTournamentLobbyEventsByCode: function (v) {
        this.unblock();
        return requestHelper.call('GET', requestHelper.buildUrl(apiVersion, `/tournament/public/${apiVersion}/lobby/events/by-code/${v.tournamentCode}`));
    },
    // POST /tournament/public/v1/provider Creates a tournament provider and returns its ID. (REST)
    // Return Value: int
    createTournamentProvider: function () {
        this.unblock();
        return requestHelper.call('POST', requestHelper.buildUrl(apiVersion, `/tournament/public/${apiVersion}/provider`));
    },
    // POST /tournament/public/v1/tournament Creates a tournament and returns its ID. (REST)
    // Return Value: int
    createTournament: function (v) {
        this.unblock();
        return requestHelper.call('POST', requestHelper.buildUrl(apiVersion, `/tournament/public/${apiVersion}/team/${v.teamIds}`));
    }
});
