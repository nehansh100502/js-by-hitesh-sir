// immediately invoked functions expression:
//: Global scope ke pollution se problem hoti h kai bar usase bachne ke liye to 
//global scope ke pollution ke variables and jo bhi vha declaration h usase bachne
// ke  liye iife ka use kiya jata h 

// ()()//iife 

(function chai(){
   console.log(`DB Connected`)
})();// add semicolon when write two iife code 

(() => {
    console.log(`DB ConnectedTWO`)
 })()
 