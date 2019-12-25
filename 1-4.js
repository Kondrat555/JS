
let x= 457
if(x%2==0){
let a=Math.floor(x/100);
let b=x-a*100;
let c=Math.floor(b/10);
let d=b-c*10;
let S=a+c+d;
console.log(S);
}
else{
    let a=Math.floor(x/100);
let b=x-a*100;
let c=Math.floor(b/10);
let d=b-c*10;
let S=a*c*d;
console.log(S);
}
