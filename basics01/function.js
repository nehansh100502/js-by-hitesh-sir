// functions 
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

//squre 
function sqr (n){
    if (n <= 10 ){
        return(n*n)
    }
    else{
        return(`err`)
    }

}
// console.log(sqr(4));

function add(m,n){
    return m+n
}
// console.log(add(2,5))

function sub(m , n){
        if (m<=100 && n>200)
        {
            return m-n
        }
        else{
            return err
        }
}
// console.log(sub(10,221))

function myname(n){
    return n;
}
// console.log(myname("neha"))

let m=add(5);//NaN 
function add(n,m)
{
    return (n+n+m)
}
// console.log(add(4))

// console.log(square(5)); // 25

function square(n) {
  return n * n;
}

// console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
// const square = function (n) {
//   return n * n;
// };

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

//recursive functions .......

function loop(x) {
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    if (x >= 10) {
      return x;
    }
    // do stuff
    console.log(x+1)
     loop(x + 1); // the recursive call
  }
  console.log(loop(5));

  //function stack 

  function foo(i) {
    if (i < 0) {
      return;
    }
    console.log(`begin: ${i}`);
    foo(i - 1);
    console.log(`end: ${i}`);
  }
  foo(3);


//nested function 
  function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  console.log(fnInside(5)); // 8
  console.log(outside(3)(5)); // 8

  function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10)); // 20 (instead of 10)