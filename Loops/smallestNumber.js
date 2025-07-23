function smallestNumber (arr){
    let min = arr[0]; // infinity
    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

let arr = [211,30,111,50,77,22,89];
let result = smallestNumber(arr);
console.log(result);