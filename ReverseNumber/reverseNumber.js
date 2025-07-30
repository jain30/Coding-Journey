var reverseNumber = function(x){
    let xCopy = x;
    x = Math.abs(x);
    let rev = 0;

    while(x > 0){
        let lastDigit = x % 10;
        rev = (10 * rev) + lastDigit;
        x = Math.floor(x/10)
    }
    if(xCopy < 0){
        return -rev
    }
    else{
       return rev
    }
}
let num  = -1236;
let result  = reverseNumber(num);
console.log(result);