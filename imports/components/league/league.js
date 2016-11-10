import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './league.html';
 
class LeagueCtrl {
    constructor($scope) {
        var ctrl = this;
        $scope.regions = ['br', 'eune', 'euw', 'jp', 'kr', 'lan', 'las', 'na', 'oce', 'ru', 'tr']
        
        ctrl.getSummonersByNames = function() {
            Meteor.call('getSummonersByNames', {region:ctrl.region, summoners:ctrl.summonerName}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersByIds = function() {
            Meteor.call('getSummonersByIds', {region:ctrl.region, summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersNamesByIds = function() {
            Meteor.call('getSummonersNamesByIds', {region:ctrl.region, summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersMasteriesByIds = function() {
            Meteor.call('getSummonersMasteriesByIds', {region:ctrl.region, summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersRunesByIds = function() {
            Meteor.call('getSummonersRunesByIds', {region:ctrl.region, summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getAllChampions = function() {
            Meteor.call('getAllChampions', {region:ctrl.region}, function(error, results) {
                console.log(results);
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getChampionById = function() {
            Meteor.call('getChampionById', {region:ctrl.region, championId:selectedChampionId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getLeaguesBySummonerIds = function() {
            Meteor.call('getLeaguesBySummonerIds', {region:ctrl.region, summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getLeagueEntriesBySummonerIds = function() {
            Meteor.call('getLeagueEntriesBySummonerIds', {region:ctrl.region, summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.updateSummonerRegion = function() {
            Meteor.call('updateSummonerRegion', ctrl.region);
            console.log(ctrl.region)
        };
    }
}
 
export default angular.module('league', [
  angularMeteor
])
  .component('league', {
      templateUrl: 'imports/components/league/league.html',
      controller: ['$scope', LeagueCtrl]
  });