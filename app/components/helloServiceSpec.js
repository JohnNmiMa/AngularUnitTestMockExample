describe("helloService", function() {
    beforeEach(angular.mock.module('HelloModule'));
    it('should return "hello" when called', function() {
        angular.mock.module(function($provide) {
            // This is the mocked "uppercaseService". The $provide
            // is from angular. It has multiple methods (provider, constant,
            // value, factory, service). Here, we are creating a "value" service.
            // This is part of a new/mocked "module".
            $provide.value('uppercaseService', function(value) {
                console.log("Calling mocked version of 'uppercaseService'");
                return value;
            });
        });
        inject(function(helloService) {
            expect(helloService()).toBe("hello");
        });
    });
});
