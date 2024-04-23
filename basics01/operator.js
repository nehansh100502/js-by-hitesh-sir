// // let a = ;
// for(let i=0;i<=10;i++){
//     console.log(i)
// }
// // console.log(a)

// const obj = {};

// obj.x = 3;
// console.log(obj.x); // Prints 3.
// console.log(obj); // Prints { x: 3 }.

// const key = "y";
// obj[key] = 5;
// console.log(obj[key]); // Prints 5.
// console.log(obj); // Prints { x: 3, y: 5 }.


// const val = 0;
// val.x = 3;

// console.log(val.x); // Prints undefined.
// console.log(val); // Prints 0.


//destructuring of assignment....

const foo = ["one", "two", "three"];
// const one = foo[0];
// const two = foo[1];
// const three = foo[2];
const [one, two, three] = foo;
// console.log(foo);

//evaluating and nesting

// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
// let x = f();

// x = g(); // Reassigns the variable x to the result of g().

let x;
const y = (x = f()); // Or equivalently: const y = x = f();
console.log(y); // Logs the return value of the assignment x = f().

console.log(x = f()); // Logs the return value directly.

// An assignment expression can be nested in any place
// where expressions are generally allowed,
// such as array literals' elements or as function calls' arguments.
console.log([0, x = f(), 0]);
console.log(f(0, x = f(), 0));

