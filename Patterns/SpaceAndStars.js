// need to revise it again
for(let i = 0; i < 5; i++){
    let row = " "
    for(let j = 0; j < 5 - (i + 1); j++){
        row = row + "   "
    }
    for(let k = 0; k < i + 1; k++){
        row = row + " * "
    }
    console.log(row)
}