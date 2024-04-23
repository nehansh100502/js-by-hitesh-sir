# functions : 
a set of statements that performs a task or calculates a value ,
the change is not reflected globally or in the code which called that function.

```javascript

    function square(number) {
  return number * number;
};
```
1 - Named Function Declaration:
```javascript

    function add(a, b) {
    return a + b;
};
```
2 - Function Expression:
```javascript
    const subtract = function(a, b) {
    return a - b;
};

```
3 - Arrow Function Expression:
```javascript
const multiply = (a, b) => {
    return a * b;
};
```
4 - Anonymous Function:An anonymous function is a function without a name. It can be a function declaration without an identifier or a function expression without a variable name.
```javascript
    // Anonymous Function Declaration
function(a, b) {
    return a / b;
}

// Anonymous Function Expression
const divide = function(a, b) {
    return a / b;
};

```
5 - Constructor Function:
 Constructor functions are used to create objects. They are invoked with the new keyword.
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person("John", 30);

```
6 - Method:
 A method is a function that is a property of an object.
 ```javascript
    const person = {
    name: "Alice",
    greet: function() {
        return "Hello, " + this.name;
    }
};

console.log(person.greet()); // Output: Hello, Alice

 ```
 7 - Immediately Invoked Function Expression (IIFE):
 An IIFE is a function that is executed immediately after it's created.
 ```javascript
    (function() {
    console.log("I'm immediately invoked!");
})();

 ```
 8 - Generator Function:
Generator functions enable writing iterators more easily.
```javascript
    function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value); // Output: 1

```
- These are some common types of functions in JavaScript, each serving different purposes and offering various features and syntaxes.