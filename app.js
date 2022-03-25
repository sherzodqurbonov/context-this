"use strict"
// function hi() {
//     console.log(this);
// }
// hi(); // undefiend
//  1)
// function showThis(a,b){
//     console.log(this); // undefined
//     function calc(){
//         console.log(this); //undefined
//         return a + b;
//     }
//     console.log(calc());
// }
// showThis(8,10);

// 2)
// const obj = {
//     a:8,
//     b:10,
//     calc: function(){
//         console.log(this.a + this.b);
//     },
// };
// obj.calc();

// 3)
// function Car(name,color){
//     this.name = name;
//     this.color = color;
//     this.hi = function(){
//         console.log('hi');
//     };
// }
// const mers = new Car('Mers','black');
// console.log(mers);
// mers.hi();

// 4)

function hello(surname){
    console.log(this);
    console.log(this.name + " " + surname);
}
const persone = {
    name:'Samar',
};
hello.call(persone, 'Badriddinov');
hello.apply(persone,['Badriddinov']);

function calc(num){
    return this * num;
}
const  double = calc.bind(2);
console.log(double(3));