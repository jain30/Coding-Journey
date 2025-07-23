// let n = 4
// for(let i = 0; i <= n-1; i++){
//     let row = " ";
//     for(let j = 0; j <= n-1; j++){
//         row = row + i;
//     }
//     console.log(row);
// }

let n = 4
for(let i = 4; i > 0; i--){
    let row = " ";
    for(let j = 1; j <= i; j++){
        row = row + j + " ";
    }
    console.log(row);
}