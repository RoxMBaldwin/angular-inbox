(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('toolbar', {
      bindings: {
        toolbar : '<'
      },
    controller: function() {
      const vm = this
      vm.messageState= function(data){
        console.log("fggdgdgdfg");
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          data[i].selected=true
        }

      }


    },
    templateUrl: 'app/toolbar/toolbar.html'
  })
}());
