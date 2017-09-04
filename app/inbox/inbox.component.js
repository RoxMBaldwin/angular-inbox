(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('inbox', {

    controller: function() {
      const vm = this
      console.log(vm)

      vm.$onInit=function(){
        var data = angular.fromJson(json)
        vm.messages = data
        // vm.markread = data
        //console.log(data);
        // for(var i = 0; i < data.length; i++){
        //   vm.checkid = data[i].id
        //   //console.log(vm.checkid)
        // }
      }

      // vm.markread = function(data){
      //   for(var i = 0; i < data.length; i++){
      //     if (data[i].selected === true){
      //       data.read === true
      //       console.log('yes?')
      //     } else {
      //       data.read === false
      //       console.log('no?')
      //     }
      //   }
      // }

  },
    templateUrl: 'app/inbox/inbox.html'
  })
}());
