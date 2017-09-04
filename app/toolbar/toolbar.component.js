(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('toolbar', {
      bindings: {
        datatoolbar : '<',
      },
    controller: function() {
      const vm = this

      vm.someMsg = function(data){
        var counter = 0
        for(var i = 0; i < data.length; i++){
          if(data[i].selected){
            counter++
          }
        }
        if( counter < data.length && counter > 0){
          return true
        } else {
          return false
        }
      }

      vm.allMsg = function(data){
        var counter = 0
        for(var i = 0; i < data.length; i++){
          if(data[i].selected){
            counter++
          }
        }
        if( counter === data.length){
          return true
        } else {
          return false
        }
      }

      vm.noMsg = function(data){
        var counter = 0
        for(var i = 0; i < data.length; i++){
          if(data[i].selected){
            counter++
          }
        }
        if( counter === 0){
          return true
        } else {
          return false
        }
      }

      vm.messageState= function(data){
        for(var i = 0; i < data.length; i++) {
          data[i].selected=true

        }
    }

    vm.markread = function(data){
      for(var i = 0; i < data.length; i++){
        if(data[i].selected){
          data[i].read = true
        } else {
          data[i].read = false
        }
      }
    }

    },
    templateUrl: 'app/toolbar/toolbar.html'
  })
}());
