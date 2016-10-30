import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './league.html';
 
class LeagueCtrl {
    constructor($scope) {
        var ctrl = this;

        var selectedSummonerNames = 'Phroggen, Calactic Gock';
        var selectedSummonerIds = '60239169, 23521773';
        var selectedRegion = 'na';
        
        ctrl.getSummonersByNames = function() {
            Meteor.call('getSummonersByNames', {region:selectedRegion, summoners:selectedSummonerNames}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersByIds = function() {
            Meteor.call('getSummonersByIds', {region:selectedRegion, summonerIds:selectedSummonerIds}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersNamesByIds = function() {
            Meteor.call('getSummonersNamesByIds', {region:selectedRegion, summonerIds:selectedSummonerIds}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersMasteriesByIds = function() {
            Meteor.call('getSummonersMasteriesByIds', {region:selectedRegion, summonerIds:selectedSummonerIds}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersRunesByIds = function() {
            Meteor.call('getSummonersRunesByIds', {region:selectedRegion, summonerIds:selectedSummonerIds}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getAllChampions = function() {
            Meteor.call('getAllChampions', {region:selectedRegion}, function(error, results) {
                console.log(results);
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getChampionById = function() {
            Meteor.call('getChampionById', {region:selectedRegion, championId:selectedChampionId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getLeaguesBySummonerNames = function() {
            Meteor.call('getLeaguesBySummonerNames', {region:selectedRegion, summonerIds:selectedSummonerIds}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getLeagueEntriesBySummonerNames = function() {
            Meteor.call('getLeagueEntriesBySummonerNames', {region:selectedRegion, summonerIds:selectedSummonerIds}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
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