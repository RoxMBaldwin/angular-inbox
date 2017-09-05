(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('inbox', {

    controller: function($http) {
      const vm = this
      vm.$onInit=function(){
        const url = 'http://localhost:8082/api'
        $http.get(url + '/messages').then(function(messages){
          vm.messages = messages.data._embedded.messages
          console.log(messages.data._embedded.messages)
        })
      }
   },
    templateUrl: 'app/inbox/inbox.html'
  })
}());


// var data = angular.fromJson(json)
// vm.messages = data
