var isPalindrome = function(x){
    //121
    let xCopy = x;
    let rev = 0;

    while(x > 0){
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x = Math.floor(x/10)    
    }
 return rev === xCopy;
}
  let num = 1211;
  let result = isPalindrome(num);
  console.log(result)