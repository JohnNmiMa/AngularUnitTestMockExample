describe("helloService", function() {
    beforeEach(module('HelloModule'));
    it('should return "hello" when called', function() {
        module(function($provide) {
            // This is the mocked "uppercaseService". The $provide
            // is from angular. It has multiple methods (provider, constant,
            // value, factory, service). Here, we are creating a "value" service.
            // This is part of a new/mocked "module".
            $provide.value('uppercaseService', function(value) {
                console.log("Calling mocked version of 'uppercaseService'");
                return value.toUpperCase();
            });
        });
        inject(function(helloService) {
            expect(helloService()).toBe("HELLO");
        });
    });
});
