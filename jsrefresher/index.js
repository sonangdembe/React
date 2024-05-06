// import fruits from '/fruits';


// after we exports like 'export const number = [1,2,3]'
// we have use {}
// import {number} from './fruits'


// we can import at once like this too
// import {number , fruits} from './fruits'

import *as something from './fruits'



// Arrow Function
const PI= 3.14;
const myFunction =()=>{
    console.log(PI)
}
myFunction();




// Import and Export in React

// const fruits = ['apple','oranges','mango'];
const data = ()=>{
    console.log(something.fruits);    //  this will be the output ['apple','oranges','mango']
    // But if we wanna exports fruits from the differents file then   
    console.log(something.number);
    

}
data();



//---------------------------Spread and Rest Operator-------------------------

const arg1 = ['sona', 'angdembe'];
const arg2 = ['tina','mina'];
const arg= [...arg1,...agr2];
console.log(arg); 

// output : ["sona", "angdembe", "tina", "mina"]



// We can add spread to object
const student ={
    name: 'sona',
    age: 10
}

console.log(student)
// output : [object Object] {age: 10,name: "sona"}

const detailInfo = {...student,location:'usa'}
console.log(detailInfo)
// this will print location too



// Rest data

const dummy = (data) =>{
    console.log(data);
}
dummy(1)


// to display more than one type of data
// const dummy = (...data) =>{
//     console.log(data);
// }
// dummy(1,2,3)




// Destructuring
// Array destructuring
const [a,b] = ['sona','mona']
console.log(a)   // output 'sona'

// const [a,,c] = ['sita','sona','mona']
// console.log(c)  // output 'mona'

// Object destructuring
const {c,d} = {name : 'mona',age : 33}
console.log(c) // output 'mona