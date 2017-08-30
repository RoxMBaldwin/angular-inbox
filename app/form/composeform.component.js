(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('composeform', {
    controller: function() {
      console.log('form working')
    },
    templateUrl: 'app/form/composeform.html'
  })
}());
