describe("helloModule", function() {
    beforeEach(function() {
        angular.module('MockThisService',[]);
        angular.mock.module('HelloModule');
    });

    describe('helloService', function() {
        it('should return "hello" when called', function() {
            module(function ($provide) {
                // This is the mocked "uppercaseService". The $provide
                // is from angular. It has multiple methods (provider, constant,
                // value, factory, service). Here, we are creating a "value" service.
                // This is part of a new/mocked "module".
                $provide.value('uppercaseService', function (value) {
                    console.log("Calling mocked version of 'uppercaseService'");
                    return value.toUpperCase();
                });
            });
            angular.mock.inject(function (helloService) {
                expect(helloService()).toBe("HELLO");
            });
        });
    });

    describe('Filter test example', function() {
        it('should remove underscores and capitalize words in a string', inject(function(rucwFilter) {
            expect(rucwFilter("THIS_YEAR_SO_FAR")).toEqual('This Year So Far');
        }))
    })
});
