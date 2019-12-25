
let S;  let v;  let t;
const readline = require('readline-sync');

let x;


  v = readline.question('Enter number ');
  console.log(`You entered ${v}`);
  t = readline.question('Enter number ');
  console.log(`You entered ${t}`);

function rasst(){
    S = v*t;
    console.log('Расстояние = '+S);
}
rasst();