//brute force approach
var buyAndSell = function(price){
    let maxProfit = 0;

    for(let i = 0; i < price.length; i++){
        for(let j = 1; j < price.length; j++){

            let profit = price[j] - price[i];
         
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

let price = [7,1,5,3,6,4,15];
let result = buyAndSell(price);
console.log(result);