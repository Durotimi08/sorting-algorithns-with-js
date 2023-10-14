var array = [2, 4, 9, 5, 1, 7, 8, 99, 10, 87, 0, 26, 5, 47, 50];
console.time("timer");
var x = array.length;
for (i = 0; i < x; i++){
    for(j = i+1; j < x; j++){
        if(array[i] >= array[j]){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);
console.timeEnd("timer");
