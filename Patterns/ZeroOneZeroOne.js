let n = 4
for(let i = 0; i < n; i++){
    let row = " ";
    let troggle = 1;
    for(let j = 0; j <= i; j++){
       row = row + troggle;
        if(troggle == 1){
            troggle = 0;
        }else{
            troggle = 1;
        }
    }
    console.log(row);
}