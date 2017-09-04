(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('message', {
    bindings: {
      messageselected : '<'
    },
    controller: function() {

      const vm = this
    //  console.log(vm)

          vm.selectedMessage = function(selected, messages){
            messages.selected = selected

          //  console.log(messages);
          }

          vm.toggleStar = function(message){
            message.starred = !message.starred
            }
    },
    templateUrl: 'app/message/message.html'
  })
}());
