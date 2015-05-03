var C = {};     // C Object simplifies exporting the module
C.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

C.getChange = function (totalPayable, cashPaid) {
    'use strict';

    var change = [], length = C.coins.length, 
    remaining = cashPaid - totalPayable;

    for (var i = 0; i < length; i++) { 
        var coin = C.coins[i];

        if(remaining/coin >= 1) {
            var times = Math.floor(remaining/coin);

            for(var j = 0; j < times; j++) {
                change.push(coin);            
                remaining = remaining - coin; 
            }
        }
    }
    return change
};

module.exports = C;