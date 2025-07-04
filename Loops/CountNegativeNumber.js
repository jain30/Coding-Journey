function countNegativeNumber(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [2,4,-5,3,3,2,-1,22,5-14,-9]
let result = countNegativeNumber(arr);
console.log(result);