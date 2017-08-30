(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('message', {
    controller: function() {
      console.log('message working')
    },
    templateUrl: 'app/message/message.html'
  })
}());
