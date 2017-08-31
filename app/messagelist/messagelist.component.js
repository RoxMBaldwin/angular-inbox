(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('messagelist', {
     bindings: {
      messagelistselected : '<',
    },
    controller: function() {
      const vm=this
    console.log(vm);
    },
    templateUrl: 'app/messagelist/messagelist.html'
  })
}());
