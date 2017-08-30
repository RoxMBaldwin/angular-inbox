(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('toolbar', {
    controller: function() {
      console.log('toolbar working')
    },
    templateUrl: 'app/toolbar/toolbar.html'
  })
}());
