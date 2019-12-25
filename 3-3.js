function fatr(a)
{
if (a%2!=0 && a%3!=0 && a%5!=0 || a==2 || a==3 || a==5)
{
return true;
}
else {
    return false;
}
}
console.log(fatr(3));