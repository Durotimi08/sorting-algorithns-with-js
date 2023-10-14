var array = [2, 4, 9, 5, 1, 7, 8, 99, 10, 87, 0, 26, 5, 47, 50];
console.time("timer");
var length = array.length;
for (i = 1; i < length; i++){
    value = array[i];
    x = i;
    while(x > 0 && array[x-1] > value){
       array[x] = array[x-1];
       x--;
    }
    array[x]  = value; 
}
console.log(array);
console.timeEnd("timer");