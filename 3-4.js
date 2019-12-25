function sum()
{ const readline = require('readline-sync');
    let a=[];
   let n = readline.question('vvedite kolichestvo chisel: ');
    console.log(`kolichestvo chisel ${n}`);
    let S= 0;
for ( let i=0; i<n; i++){
    let x = readline.question('vvedite chislo: ');
    a[i]= x;
    S=S+Number(a[i]);
}
return S;
}
console.log(sum());