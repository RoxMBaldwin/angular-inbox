(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('composeform', {
      bindings: {
        dataform : '<',
        formstatus : '<'
      },
    controller: function($http) {

    },
    templateUrl: 'app/form/composeform.html'
  })
}());
