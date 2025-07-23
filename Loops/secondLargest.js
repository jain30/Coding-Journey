function secondLargestNumber (arr){
    let firstLargest = -Infinity;
    let secondLargest = - Infinity;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== firstLargest){
            // for remove duplicate : && arr[i] !== firstLargest
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

let arr = [1,3,6,8,5,12,20];
let result = secondLargestNumber(arr);
console.log(result);

// 
//corner cases:
//whether the array is empty,
// array has -ve numbers
// or Array has 1 element or 2 element
//if duplicate is present and the interviewer asked you to avoid duplicate