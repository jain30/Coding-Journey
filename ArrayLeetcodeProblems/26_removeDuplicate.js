var removeDuplicate = function(nums){
    let x = 0;

    for (let i = 0; i< nums.length; i++){
         if(nums[i] > nums[x]){
            x = x + 1;
            nums[x] = nums[i];
         }
    }
    return x + 1;
}

let nums = [1,1,3,4,5,5,6,6,7,12,12,12,19,20,20];
let result = removeDuplicate(nums);
console.log(result);