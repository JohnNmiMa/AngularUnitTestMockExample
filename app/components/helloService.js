angular.module('HelloModule', [])

.factory('uppercaseService', function() {
    return function(str) {
        return str.toUpperCase();
    }
})

.factory('helloService', function(uppercaseService) {
    return function() {
        return uppercaseService('hello');
    }
});
