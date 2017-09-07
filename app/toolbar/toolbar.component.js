(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('toolbar', {
      bindings: {
        datatoolbar : '<',
        plusicon : '<'
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
        } }
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
          }
        }
      }

      vm.messageState= function(data){
        if (vm.allMsg(data)) {
          for(var i = 0; i < data.length; i++) {
          data[i].selected=false
          }
        }

        else if (vm.noMsg(data)) {
          for(var i = 0; i < data.length; i++) {
            data[i].selected=true
          }
        }

        else if (vm.someMsg(data)) {
          for(var i = 0; i < data.length; i++) {
            data[i].selected=true
          }
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
        var arr = []
        for(var i = 0; i < data.length; i++){
          if(data[i].selected){
            arr.push(data[i].id)
            data.splice(i, 1)
            i--
          }
        }

        var body = {
          messageIds: arr,
          command: 'delete'
        }

        const url = 'https://young-bastion-40394.herokuapp.com/api'

        $http.patch(url + '/messages', JSON.stringify(body))
          .then(function(response){
          console.log('deleted')
          })
      }

      vm.addlabel = function(label, messages){
        var arr = []
        for(var i = 0; i < messages.length; i++){
          var labelExists = messages[i].labels.includes(label)
          if (messages[i].selected && !labelExists){
            messages[i].labels.push(label)
            arr.push(messages[i].id)
          }
        }

        var body = {
          messageIds: arr,
          command: 'addLabel',
          label : label
        }

        const url = 'https://young-bastion-40394.herokuapp.com/api'

        $http.patch(url + '/messages/', body)
        .then(function(response){
          console.log('new label')
        })
      }

      vm.removelabel = function(label, messages){
        var arr = []
        for(var i = 0; i < messages.length; i++){
          var labelExists = messages[i].labels.includes(label)
          if (messages[i].selected){
            messages[i].labels.pop(label)
            arr.push(messages[i].id)
          }
        }

        var body = {
          messageIds: arr,
          command: 'removeLabel',
          label: label
        }

        const url = 'https://young-bastion-40394.herokuapp.com/api'

        $http.patch(url + '/messages/', body)
          .then(function(response){
          })
      }

      vm.messagecount = function(messages){
        if(messages !== undefined){
          var counter = 0
          for(var i = 0; i < messages.length; i++){
            if(messages[i].read == false){
              counter++
            }
          }
          return counter
        }
      }

      vm.formview = function(form){
        form.view = !form.view
      }
    },
    templateUrl: 'app/toolbar/toolbar.html'
  })
}());
