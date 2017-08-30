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



          vm.selectmessage = function(selected) {
              //    console.log(selected)
                console.log(vm.anything);
               }
          vm.toggleStar=function(message){
            message.starred = !message.starred
            
          }
    },
    templateUrl: 'app/message/message.html'
  })
}());
