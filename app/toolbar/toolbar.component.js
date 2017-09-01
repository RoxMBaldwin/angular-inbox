(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('toolbar', {
      bindings: {
        datatoolbar : '<'
      },
    controller: function() {
      const vm = this

//function someMSg allMsg noMsg ; each function returns either true or false.
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


    },
    templateUrl: 'app/toolbar/toolbar.html'
  })
}());


// vm.someMsg = function(data){
//   console.log('some')
//   return data.some(function(data){
//     return data.selected == true && data.selected == false
//   })
// }
//
// vm.allMsg = function(data){
//   console.log('all');
//   return data.every(function(data){
//     return data.selected == true
//   })
// }
//
// vm.noMsg = function(data){
//   return data.every(function(data){
//     return data.selected == false
//   })
// }
