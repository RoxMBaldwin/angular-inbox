(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('inbox', {
    controller: function() {
      console.log('inbox working')
    },
    templateUrl: 'app/inbox/inbox.html'
  })
}());


const data = angular.fromJson(json)
