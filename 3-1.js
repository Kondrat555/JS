function chislo(){
    const readline = require('readline-sync');
    let x;
    x = readline.question('Enter number ');
  console.log(`You entered ${x}`);
  console.log(x.length);

}
chislo();