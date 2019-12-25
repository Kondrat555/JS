let array=[];
for( let i=1; i<=100;i++){
    if(i%5==0){
        array.unshift(i);
    }
}
array.reverse();
console.log(array);
console.log(`Массив состоит из ${array.length} элементов `);
