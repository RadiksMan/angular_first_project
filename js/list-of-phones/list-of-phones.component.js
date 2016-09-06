angular.module('listOfPhones').component('listOfPhones',{
    templateUrl:'js/list-of-phones/list-of-phones.template.html',
    controller: function listOfPhonesController($http){
        // this.phones = [
        // {
        //   name: 'Nexus S',
        //   snippet: 'Fast just got faster with Nexus S.',
        //   age:1
        // }, {
        //   name: 'Motorola XOOM™ with Wi-Fi',
        //   snippet: 'The Next, Next Generation tablet.',
        //   age:3
        // }, {
        //   name: 'MOTOROLA XOOM™',
        //   snippet: 'The Next, Next Generation tablet.',
        //   age:2
        // }
        var self = this;
        self.orderProp = 'age';

        $http.get('phones/phones.json').then(function(resp){
          self.phones = resp.data;
        });

    this.orderProp = 'age';
    }
});