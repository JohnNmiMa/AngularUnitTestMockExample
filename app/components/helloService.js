angular.module('HelloModule', ['ngRoute', 'MockThisService'])

.factory('uppercaseService', function() {
    return function(str) {
        return str.toUpperCase();
    }
})

.factory('helloService', function(uppercaseService) {
    return function() {
        return uppercaseService('hello');
    }
})

.filter("rucw", function() {
    // Remove Underscores, Capitalize Words
    return function(str) {
        return _.map(str.split('_'), function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
    }
});