function largestNumber(arr){
    let max = arr[0];  // -infinity
    for(let i = 1;  i < arr[i]; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

let arr = [2,4,115,22,43,95];
let result = largestNumber(arr);
console.log(result);