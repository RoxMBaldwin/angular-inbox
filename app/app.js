(function () {
  'use strict';

  angular
    .module('todoApp', [])
    .component('todo', {
      controller: function() {
        console.log('hello from the controller')
      },
      templateUrl: 'app/template/todo.html'
    })
})()
