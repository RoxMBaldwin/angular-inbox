(function () {
  'use strict';

  angular
    .module('inboxApp', [])
    .component('composeform', {
      controller: function() {
        const data = angular.fromJson(json)
        console.log('compose-form working')
      },
      templateUrl: 'app/templates/compose-form.html'
    })

    .component('messageexpanded', {
      controller: function() {
        console.log('message expanded working')
      },
      templateUrl: 'app/templates/message-expanded.html'
    })

    .component('messageread', {
      controller: function() {
        const data = angular.fromJson(json)
        console.log('message-read working')
      },
      templateUrl: 'app/templates/message-read.html'
    })

    .component('messageselected', {
      controller: function() {
        console.log('message selected working')
      },
      templateUrl: 'app/templates/message-selected.html'
    })

    .component('messagestarred', {
      controller: function() {
        console.log('message starred working')
      },
      templateUrl: 'app/templates/message-starred.html'
    })

    .component('messageunread', {
      controller: function() {
        console.log('message unread working')
      },
      templateUrl: 'app/templates/message-unread.html'
    })

    .component('messagewithlabels', {
      controller: function() {
        console.log('message with labels working')
      },
      templateUrl: 'app/templates/message-with-labels.html'
    })
})()

// (function () {
//   'use strict';
//
//   angular
//     .module('inboxApp', [])
//     .component('message-read', {
//       controller: function() {
//         const data = angular.fromJson(json)
//         console.log('working')
//       },
//       templateUrl: 'app/templates/message-read.html'
//
//     })
// })()

// (function () {
//   'use strict';
//
//   angular
//     .module('inboxApp', [])
//     .component('inbox', {
//       controller: function() {
//         const data = angular.fromJson(json)
//         console.log(data)
//       },
//       templateUrl: 'app/templates/inbox.html'
//
//     })
// })()
