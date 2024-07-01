// string

let str = new String(`neha singh`);
console.log(str.charAt(2));
console.log(str.indexOf(`a`));

// There is a big difference between slice and substring but work is same for both 

const newstr = str.substring(0,4) // last index is not countable
// console.log(newstr)

const newstr1 = str.slice(-8,4)//its take a negative value and count from opposite side 
// console.log(newstr1)


//The trim() method of String values removes whitespace from both ends of this string and returns a new string,
// without modifying the original string.

let name = ` neha  singh   `
const newName = name.trim()//its remove whitespaces from strings..
// console.log(newName)

let url = `nehasingh%20nehasingh@gmail.com`
// console.log(url.replace(`%20`,`-`));
console.log(url.includes(`neha`))
console.log(url.split(`_`,3))