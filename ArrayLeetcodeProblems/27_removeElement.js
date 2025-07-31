var removeElement = function (nums, val){
    let x = 0;
    // arr = [5,5,6,7,7,2,4,4,3,2], val = 2
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
          nums[x] = nums[i];
           x= x+1
        }
    }
    return x;
}
let nums = [5,5,3,3,5,6,7,7,2,3,4,5];
let val = 5
let result  = removeElement(nums, val);
console.log(result)
