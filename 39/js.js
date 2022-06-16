// let arr = [1,2,3,4]
// const funcAdd = (arr,element, callback) => {
//     arr.push(element)
//     callback(arr)
// }
// const funcLog = function(arr){
//     console.log(arr)
// }
// funcAdd(arr, 5, funcLog)
// funcAdd(arr, 6, funcLog)

// let date = new Date()
// console.log(date)

// let date = new Date()
// let dateNow = new Date()
// console.log(date)
// console.log(dateNow)

// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
/*
date.setDate(14)
date.setFullYear(1999)
date.setMonth(11)
date.setSeconds(11)
console.log(date)
*/ 
/*
console.log(dateNow - date)
let mills = dateNow - date
let sec = parseInt(mills / 1000)
let min = parseInt(mills / (1000 * 60))
let time = parseInt(min / 60)
let day = parseInt(time / 24)
let year = parseInt(day / 365)
console.log(sec)
console.log(min)
console.log(time)
console.log(day)
console.log(year)
*/

// setTimeout(()=>{
//     console.log(1)
// }, 500)

// let number = 0
// setInterval(() => {
//     number++
//     console.log(number)
// }, 0.01)

// let number = 0
// let interval = setInterval(() => {
//     number++
//     console.log(number)
//     if(number == 10){
//         clearInterval(interval)
//     }
// }, 500)


/*
for(elem of arr){
    console.log(elem)
}
for(elem in arr){
    console.log(elem)
}
for(let i=0; i<=arr.length-1; i++){
    console.log(arr[i])
}
*/ 

// elementlarni ichida yuradi return qaytarmaydi
// let arr = ['salom' , 5 , 'as', 45, 'ads', 32]
// let a = arr.forEach( (e , i, a) => {
//     console.log(a) 
// } )
// console.log()


// elementlarni ichida yuradi return qaytadi
/*
let a = arr.map( (e , i, a) => {
    console.log(e , i, a) 
    return arr
} )
console.log(a)
*/ 

// let arr = ['salom' , 5 , 'as', 45, 'ads', 32, true, false, ['sd'], [1,2]]
// let filterElem =  arr.filter( (elem) => {return typeof elem == 'object'} )
// console.log(filterElem)

// let arr = ['salom', 'as', 45, 'ads', 32, true, false]
// let filterElem =  arr.find( (elem) => elem <= 89)
// console.log(filterElem)

// let arr = ['frf', 34, false, 'wd', 45]
// let filterElem = arr.filter( (elem) => typeof elem == 'string' )
// console.log(filterElem)

// let arr = ['salom' , 5 , 'as', 45, 'ads', 32, true, false]
// let filterElem =  arr.findIndex( (elem) => elem == true)
// console.log(filterElem)


// let arr = ['salom' , 5 , 'as', 45, 'ads', 3/2, true, false]
// let filterElem =  arr.some( (elem) => elem == '32' )
// console.log(filterElem)

// let arr = ['salom' , 5 , 'as', 45, 'ads', 32, true, false]
// arr.sort()
// console.log(arr)

/*
let arr = [12,35,2,45,-96,63,0,1]
arr.sort()
console.log(arr)
*/
/*
let arr = [12,35,2,45,-96,63,0,1]
arr.sort((a,b) => a-b)
console.log(arr)
*/ 

/*
let arr = [12,35,2,45,-96,63,0,1]
arr.sort((a,b) => b-a)
console.log(arr)
*/ 
/*
let arr = [12,35,2,45,-96,63,0,1]
arr.sort((a,b) => -a+b)
console.log(arr)
*/