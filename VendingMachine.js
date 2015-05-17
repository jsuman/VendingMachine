/**
 * Created by suman on 4/14/2015.
 */
var vendingMachine = {

    products: {"Haribo":45, "KitKat":75, "ToblerOne":100}, /* products and their price */
    coins:[200,100,50,20,10,5,2,1], /* 200 = 2 euro, 100 = 1 euro, others are respective cents */
    times: 0, /* number of coins */
    /**
     *
     * @param productChoice
     * @param productAmount
     * @returns string, change coins in the form of 1 * 1 euro, 1 * 1 euro, 1 * 20 Cents
     */
    buy: function(productChoice, productAmount) {
        var result = [];
        var amount = this.returnChange(productChoice,productAmount);
        if(amount === false) {
            return false;
        }
        for(var coin in this.coins)
        {
            if(this.coins[coin] > amount) {
                continue;
            } else {
               this.times = Math.floor(amount / this.coins[coin]); /*  gives no. of coins for e.g. 2  * 2 euro means two 2 euros */
                amount = amount % this.coins[coin];
                if(this.coins[coin] >= 100) {
                    this.coins[coin] /= 100;
                    result.push(this.times +" * "+ this.coins[coin]+" euro");
                } else {
                 result.push(this.times +" * "+ this.coins[coin]+" cent");
                }
            }
        }
        return result.join();
    },

    /**
     *
     * @param productChoice
     * @param amount
     * @returns boolean|string  returns boolean false when no change returned or coins equal to product price given
     */
    returnChange: function(productChoice, amount) {
        if(this.products.hasOwnProperty(productChoice))
        {
            var result = amount - this.products[productChoice];
            if(result === 0) {
                console.log("Thank you for purchasing " + productChoice);
                return false;
            } else if(result < 0) {
                console.log("Your amount is not enough!");
                return false;
            } else {
                return result;
            }
        }
        else
        {
            console.log("Sorry, the product is not available!");
            return false;
        }

    }
};