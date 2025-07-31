var reverseString = function (str){
    let len = str.length;
    let halfLen = len/2;

    for(let i = 0; i < halfLen; i++){
        //swaping (str[i], str[len - 1 - i])

        let temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
    return str;
}

let str = ['p','o','o','j','a'];
let result = reverseString(str);
console.log(result);