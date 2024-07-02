# JavaScript execution Context

1. Global execution context : this keyword 
In browser this keyword have a Window Object 
but in node.js (engine)is different 

2. Funtional execution context : 

3. Eval Execution context : as a global execution context 


-> Memory Execution Phase 
-> Execution Phase

```js
        let val_01 = 20
        let val_02 = 30
        function addnum(num1,num2){
            let total = num1+num2
            return total
        }
        let result_01 = addnum(val_01,val_02)
        let result_02 = addnum(2,3)

```



1. global execution phase : this 
2. Memory allocation Phase : in which variable memory allocate 
3. Execution phase : {} new variable environment + execution thread


# Truthy And Falsy Values :

 false , 0 , -0 , BigInt (0n), null, undefined ,NaN, ""

# Truthy Values : 
"false", " ", "0", [],{},function(){}

# how to check object is empty or not 
```js 
         
         const object01 = {}
         if (Object.keys(object01).length === 0 ){
            console.log(`object is empty ..`)
         }

```

```js 
        false == 0 //true
        false == ""//true
        0 == "" // true 
```

# && and operator 
# || or operator 
# ?? Nullish coacllising operator : null , undefined 

```js 
        let val1;
        // val1 = null ?? 10 
        // val1 = undefined ?? 10
        val1 = null ?? 10 ?? 20 // output : 10

        console.log(val1)

```

# Terniary Operator 
condition ? true : false

```js 
        const tea = 40 
        tea > 30 ? console.log(`tea price is grater than 30 `):console.log(`tea price is not afforadable`) 
```


# Break : 
- Break the control flow and come out from a scope 

# constinue :
- its not break control flow continue after checking condition check 