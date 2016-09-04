angular.module('listOfPhones').component('listOfPhones',{
    templateUrl:'js/list-of-phones/list-of-phones.template.html',
    controller: function listOfPhonesController(){
        this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
    ];
    }
});