function getDivisors(){
    const readline = require('readline-sync');
    let a=[];
   let x = readline.question('vvedite chislo: ');
    console.log(`chislo ${x}`);  
for(let i=0; i<x; i++){
    if(x%i==0){
        a.push(i);
    }
}
return a;
}
console.log(getDivisors());