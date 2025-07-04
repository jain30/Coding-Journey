
function searchElement(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        } 
    }
    return -1
}
let arr = [20,1,2,12,4,53,21]
let result = searchElement(arr,12);
console.log(result);
