

function range(a,b,c){
  /*const readline = require('readline-sync');
  let a = readline.question('vvedite pervyi argument: ');
  const readline = require('readline-sync');
  let b = readline.question('vvedite last argument: ');
  const readline = require('readline-sync');
  let c = readline.question('vvedite step: ');*/
  let mass=[];
  if(c==undefined){
  for(let i = a; i<=b; i++){
    mass.push(i);
  }
  }
 if(c>0){
    for(let i = a; i<=b; i=i+c){
      mass.push(i);
    }
  }
  if(c<0){
    for(let i = a; i=>b; i=i+c){
      mass.push(i);
    }
  }

  return mass;
}

//console.log(sum(range(1, 10)));
// → 55
console.log(range(10, 1));
// → [5, 4, 3, 2]