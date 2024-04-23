## Notes of js
# javascript
- dynamic web page
- scripting language
- developed by netscape
- dunamic background colors
- animated graphics

# features
scripting
Interpreter
event handling
case sensetive
control statement
objects as first class citizens
platform indepedent
prototype based
dynamic typing
light weight

# history
-1995 (Brendlen Eich)
# ECMA : European Computer Manufactures Assosiaton
- on which js based 
- ECMAScript is commonly used for client-side scripting on the World Wide Web, and it is increasingly being used for server-side applications and services using runtime environments - Node.js, deno and bun.

-The ECMAScript language includes structured, dynamic, functional, and prototype-based features..


# Data Types & Data Strunctures : 
- Coercion is the implicit type conversion that happens when JavaScript tries to perform an operation with values of different types.

#  implicit coercion : 
- an automatic conversion of values from one datatype to another.It is also known as type conversion

# explicit coercion :
- is the conversion of data type depending on the user's necessity.

# ex - “1” + 1: Concatenating a String and a Number

## Data types : primitive : 
- A single variable can only store a single type of data.data that is not an object and has no methods or properties. 
There are 7 primitive data types:
   string
   number
   bigint
   Null 
   Symbol
   Undefined 
   Boolean have ( truthy and falsy values )
   # falsy value in boolean :
   false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

   ```javascript
   const allElements = document.querySelectorAll("*");
   ```

## non- primitive values :
- non-primitive data types are complex data types that represent a collection of values.
array 
object
have their own unique set of methods.

 ## var let and const :
- var and let create variables that can be reassigned another value.
- const creates "constant" variables that cannot be reassigned another value.

# var :
The scope of variables declared with var
Variables declared with var can have a global or local scope. Global scope is for variables declared outside functions, while local scope is for variables declared inside functions.

# operators
