
function max2(){
    const readline = require('readline-sync');
    let x;
    x = readline.question('Enter number ');
  console.log(`You entered ${x}`);
    let n=x%10;
    x=x/10;
  while(x>0)  {
if(x%10>n)
n=x%10;
x=x/10;
  }
  return Math.floor(n);
}
console.log(max2());