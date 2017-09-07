(function() {
  'use strict';
  angular
  .module('inboxApp')
  .component('composeform', {
      bindings: {
        dataform : '<',
        formstatus : '<',
        submitform : '<'
      },
    controller: function($http) {
      const vm = this

      vm.submitForm = function(data, subject, body, formhide){
        // console.log(subject)
        // console.log(body)
        var body = {
          subject : subject,
          body : body
        }
        //console.log(body)
        const url = 'https://young-bastion-40394.herokuapp.com/api'

        $http.post(url + '/messages', JSON.stringify(body))
          .then(function(response){
            data.push(response.data)
            formhide.view = true
          })
      }
    },
    templateUrl: 'app/form/composeform.html'
  })
}());

// {
//     "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
//     "read": false,
//     "starred": true,
//     "labels": ["dev", "personal"],
//     "body": "Hey, it's Virginia Mosby,\n\nThe littlest thing can cause a ripple effect that changes your life.",
//   }
