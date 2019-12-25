let S=0;
let A=0;
let n=0;
const readline = require('readline-sync');

let x;


 
  do {
    x = readline.question('Enter number ');
    console.log(`You entered ${x}`);
    n++;
    S+=x;
    A=S/n;
  } while (x !== '0');
   
console.log("vsego chisel= "+n+" summa= "+S+" srednee="+A);