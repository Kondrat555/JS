'use strict';
function changeCar(inputObject){
let newCar = Object.assign(inputObject, {passengers:35});
return newCar;
}
function tonnage(inputObject){
    let newCar = Object.assign(inputObject, {tonnage:10});
    return newCar;
}
let car = {massa:1};
console.log('Объект car');
console.log(car);
let bus = changeCar(car)
console.log('Объект bus');
console.log(bus);
let autoTruck = tonnage(car);
console.log('Объект autoTruck');
console.log(autoTruck);
