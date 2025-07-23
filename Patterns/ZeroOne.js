let troggle = 1;

for(let i = 0; i < 5; i++){
    let row = " "
    for(let j = 0; j <= i; j++){
        row = row + troggle;
        if(troggle == 1){
            troggle = 0;
        }
        else{
            troggle = 1
        }
    }
    console.log(row);
}