function countNumber(n){
    let count = 0
    while( n > 0){
        n = Math.floor(n / 10);
        count++
    }
    return count;
}
let num = 2556;
let  digit = countNumber(num);
console.log(digit);


// let n = 459;
// let count = 0 ;

// while( n > 0){
//     n = Math.floor(n / 10);
//         count++
// }   
// console.log(count)
