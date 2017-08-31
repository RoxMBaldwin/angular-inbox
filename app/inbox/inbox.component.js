(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('inbox', {

    controller: function() {
      const vm = this

      vm.$onInit=function(){
        var data = angular.fromJson(json)
        vm.messages = data
        console.log(data);
      }
  },
    templateUrl: 'app/inbox/inbox.html'
  })
}());
