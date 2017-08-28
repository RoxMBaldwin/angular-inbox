(function () {
  'use strict';

  angular
    .module('todoApp', [])
    .component('todo', {
      controller: function() {
        console.log('hello from the controller')
      },
      templateURL: 'app/templates/todo.html'
    })
})()
