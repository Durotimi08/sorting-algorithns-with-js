var array = [2, 4, 9, 5, 1, 7, 8, 99, 10, 87, 0, 26, 5, 47, 50];

console.time("timer");
if(array.length % 2 === 0){
    let gap = (array.length/2)-1;
}else{
    gap = (array.length/2)-0.5;
    merge(gap);
}

function merge(gap){
    do{
    for(i = 0; i < gap+1; i++){
        let h = i;
        let z = 0;
       do{
        z++
        if (z > 0 && array[h] > array[gap+h]){
            let temp = array[h];
            array[h] = array[gap+h];
            array[gap+h] = temp;
          }
        h += gap;
       }while(h < array.length);
    }
    gap--;  
}while(gap > 0);
console.log(array);
}

console.timeEnd("timer");