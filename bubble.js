var array = [2, 4, 9, 5, 1, 7, 8, 99, 10, 87, 0, 26, 5, 47, 50];
console.time("timer");
var x = array.length;
for (h = 0; h < x; h++){
    for (i = 0; i < x; i++){
        let pair = i+1;
        if (array[i] > array[pair]){
            let temp = array[i];
            array[i] = array[pair];
            array[pair] = temp;
        }
    }
}
console.log(array);
console.timeEnd("timer");