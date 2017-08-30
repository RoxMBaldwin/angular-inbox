(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('message', {
    controller: function() {
      const vm = this
          vm.$onInit = function() {
            var data = angular.fromJson(json)
            vm.messages = data
            console.log(vm.messages)
          }

          vm.markup = function(message) {
            console.log(message)
          }

          vm.selectmessage = function(selected) {
              //    console.log(selected)
                console.log(vm.anything);
               }

          function toggleStar() {
            vm.starred = !vm.starred
          }
    },
    templateUrl: 'app/message/message.html'
  })
}());
