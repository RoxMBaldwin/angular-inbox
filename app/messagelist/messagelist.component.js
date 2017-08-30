(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('messagelist', {
    controller: function() {
      console.log('messagelist working')
    },
    templateUrl: 'app/messagelist/messagelist.html'
  })
}());
