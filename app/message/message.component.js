(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('message', {
    bindings: {
      messageselected : '<'
    },
    controller: function($http) {

      const vm = this
    //  console.log(vm)

          vm.selectedMessage = function(selected, messages){
            messages.selected = selected

          console.log(messages);
          }

          vm.toggleStar = function(message){
            //message.starred = !message.starred

            var body = {
              messageIds: [message.id],
              command: 'star',
              star : !message.starred
            }

            const url = 'https://young-bastion-40394.herokuapp.com/api'
            $http.patch(url + '/messages', JSON.stringify(body))
              .then(function(response){
                message.starred = !message.starred
              })
            }


    },
    templateUrl: 'app/message/message.html'
  })
}());
