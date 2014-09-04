angular.module('HelloModule', [])

.factory('uppercaseService', function() {
    return function() {
        return 'hello';
    }
})

.factory('helloService', function() {
    return function() {
        console.log("Call uppercaseService from helloService");
        return uppercaseService('hello');
    }
});
