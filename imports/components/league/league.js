'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import './league.html';
 
class LeagueCtrl {
    constructor($scope) {
        var ctrl = this;

        ctrl.region = 'na';
        ctrl.regions = ['br', 'eune', 'euw', 'jp', 'kr', 'lan', 'las', 'na', 'oce', 'ru', 'tr'];
        
        ctrl.getSummonersByNames = function() {
            Meteor.call('getSummonersByNames', {summoners:ctrl.summonerName}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersByIds = function() {
            Meteor.call('getSummonersByIds', {summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersNamesByIds = function() {
            Meteor.call('getSummonersNamesByIds', {summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersMasteriesByIds = function() {
            Meteor.call('getSummonersMasteriesByIds', {summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getSummonersRunesByIds = function() {
            Meteor.call('getSummonersRunesByIds', {summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getAllChampions = function() {
            Meteor.call('getAllChampions', function(error, results) {
                console.log(results);
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getChampionById = function() {
            Meteor.call('getChampionById', {championId:1}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getLeaguesBySummonerIds = function() {
            Meteor.call('getLeaguesBySummonerIds', {summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.getLeagueEntriesBySummonerIds = function() {
            Meteor.call('getLeagueEntriesBySummonerIds', {summonerIds:ctrl.summonerId}, function(error, results) {
                ctrl.results = JSON.parse(results.content);
                $scope.$apply();
            });
        };

        ctrl.updateSummonerRegion = function() {
            Meteor.call('updateSummonerRegion', ctrl.region);
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