(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('toolbar', {
      bindings: {
        datatoolbar : '<',
      },
    controller: function($http) {
      const vm = this

      vm.someMsg = function(data){
        if(data !== undefined){
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
        }}
      }

      vm.allMsg = function(data){
        if(data !== undefined){
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
      }

      vm.noMsg = function(data){
        if(data !== undefined){
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
      }

      vm.messageState= function(data){
        for(var i = 0; i < data.length; i++) {
          data[i].selected=true

        }
    }

    vm.markread = function(data){
      var arr = []
      for(var i = 0; i < data.length; i++){
        if(data[i].selected){
          data[i].read = true
          arr.push(data[i].id)
        }
      }

      var body = {
        messageIds: arr,
        command: 'read',
        read : true
      }

      const url = 'https://young-bastion-40394.herokuapp.com/api'
      $http.patch(url + '/messages', JSON.stringify(body))
        .then(function(response){
          console.log('readddd')
        })
    }

    vm.markunread = function(data){

      var arr = []
      for(var i = 0; i < data.length; i++){
        if(data[i].selected){
          data[i].read = false
          arr.push(data[i].id)
        }
      }

      var body = {
        messageIds: arr,
        command: 'read',
        read : false
      }

      const url = 'https://young-bastion-40394.herokuapp.com/api'
      $http.patch(url + '/messages', JSON.stringify(body))
        .then(function(response){
          console.log('unreadddd')
        })
    }

    vm.removeselected = function(data){
      for(var i = 0; i < data.length; i++){
        if(data[i].selected){
          // console.log(data[i].selected)
          data.splice(i, 1)
          i--
        }
      }
    }

    },
    templateUrl: 'app/toolbar/toolbar.html'
  })
}());
