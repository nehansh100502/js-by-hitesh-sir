//Date
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let mycreatedate = new Date(2023,0,7)//month start from 0 in programming world
console.log(mycreatedate)
console.log(mycreatedate.getDate())
console.log(mycreatedate.toDateString())
console.log(mycreatedate.getMilliseconds())

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(mycreatedate.getTime())

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()

console.log(newDate)
console.log(newDate.getDay())

const date = newDate.toLocaleString(`default`,{
    weekday:`long`,

})
console.log(date)

