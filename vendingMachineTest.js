QUnit.test( "testing change for KitKat", function() {

    var result = "1 * 1 euro,1 * 20 cent,1 * 5 cent"; // one euro, one 20 cent and one 5 cent.
    var changes =  vendingMachine.buy("KitKat",200);
    ok( result === changes , changes);
});

QUnit.test("test for unavailable product", function() {

    var result = vendingMachine.buy("unavailable products", 200);
    ok(result === false, "product is not available");

})

QUnit.test("test for returned change", function(assert) {

    var result = vendingMachine.returnChange("KitKat", 200);
    assert.equal(result,125, result+" is returned as a change");

});
