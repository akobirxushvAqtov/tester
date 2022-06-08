/*
let arr = ['dsgnjks', false, 25, ['sddf', 'ssdgd']]
console.log(arr)
console.log(arr[0])
console.log(arr[3])
console.log(arr[3][0])
console.log(arr[3][1])
console.log(arr[2][1]) // err
*/

/*
let a =15
let arr = ['dsgnjks', false, 25, ['sddf', 'ssdgd']]
console.log(Array.isArray(arr))
console.log(Array.isArray(arr[1]))
console.log(Array.isArray(arr[3]))
console.log(Array.isArray(a))
*/
/*
let arr = [1,2,3,4,5]
console.log(arr.toString())
*/

/*
let arr = [1,2,3,4,5]
console.log(arr.join())
console.log(arr.join(''))
console.log(arr.join(' '))
console.log(arr.join('a'))
*/

/*
let arr = [1,2,3,4,5]
console.log(arr.slice())
console.log(arr.slice(0))
console.log(arr.slice(2))
console.log(arr.slice(1,3))
*/

/*
let arr = [1,2,3,4,5]
console.log(arr)
arr.splice(1,2, 0,8,'sadasd', false)
console.log(arr)
*/

/*
let arr = [1,2,3,4,5]
console.log(arr)
arr.splice(1,2)
console.log(arr) 
*/

/*
let arr = [1,2,3,4,5]
console.log(arr)
arr.push(6,7)
console.log(arr) 
*/
/*
let arr = [1,2,3,4,5]
console.log(arr)
arr.pop()   //oxiridagi elementni olADI
console.log(arr) 
*/

/*
let arr = [1,2,3,4,5]
console.log(arr)
arr.shift()   //boshidan elementni olADI
console.log(arr) 
*/

/*
let arr = [1,2,3,4,5]
console.log(arr)
arr.unshift(0,2)   //boshidan element qoshadi
console.log(arr) 
*/

/*
let arr = [1,2,3,4,5]
console.log(arr)
arr.reverse()   
console.log(arr)
*/

/*
let arr = ['sd', 'ff', 'a', 'b', 5, 1, 11]
console.log(arr)
arr.sort()   
console.log(arr)
*/

/*
let arr = [['Islom', 'islom1999'], ['Nurbek', 'nurbek2007'], ['Akobir', 'akobir2004']]
let username = prompt('name kirit')
let userpass = prompt('parol kirit')
let index = prompt('index kirit')
if(username == arr[index][0] && userpass == arr[index][1]){
    console.log('saytga kirdiz')
}else{
    console.log('saytga kirolmadiz')
}
*/
/*
for(let i = 1; i <= 10; i+=2){
    console.log(i)
}
*/

/*
let arr = ['sd', 'ff', 'a', 'b', 5, 1, 11]
for(let i = 0; i <= arr.length - 1; i+=1){
    console.log(arr[i])
}
*/
/*
let arr = ['Islom', 'Bejan', 'Nurbek', 'Xumoyun', 'Akobir']
let name = prompt('Ismingizni kiriting')
let islogin = false
for(let i = 0; i <= arr.length - 1; i+=1){
    if(arr[i] == name){
        islogin = true
        break
    }else{
        islogin = false
    }
}
if(islogin){
    console.log('Xush Kelibsiz ' + name)
}else{
    console.log('Siz ro\'yhatda yoqsiz.  ' + name)
}
*/

/*
let i = 0
while(i<=10){
    console.log(i)
    i++
}
*/

/*
const password = '12345678'
let pass = prompt('Parol kirit')
while(password != pass){
    pass = prompt('Parol kirit')
}
console.log('Parolni topdiz !!!')
*/

/*
const password = '12345678'
let pass
do{
    pass = prompt('Parol kirit')
}while(password != pass)
console.log('Parolni topdiz !!!')
*/

/*
let arr = []
let n = 50
for(let i = 1; i<=n; i++){
    if(i % 3 == 0){
        arr.push(i)
    }
}
console.log(arr)
*/

/*
let arr = []
let n = 10
for(let i = 0; i<=n; i++){
    arr.push(2**i)
}
console.log(arr)
*/

/*
let arr = []
let arrJuft = []
let n = 10
for(let i = 0; i<=n; i++){
    arr.push(parseInt(Math.random()*100))
}
console.log(arr)
for(let i = 0; i<=arr.length - 1; i++){
    if(i % 2 == 0){
        arrJuft.push(arr[i])
    }
}
console.log(arrJuft)
let max = arrJuft[0]
for(let i = 0; i<=arrJuft.length - 1; i++){
    if(max >= arrJuft[i]){
        max = arrJuft[i]
    }
}
console.log(max)
*/







// 36-37dars

// let arr = []
// for(let i = 0; i <= 10; i++){
//     arr[i] = i * 10
// }
// console.log(arr)
// */

/*
let k = 10
let l = 50
let s = 0
if(k < l){
    for(let i = k + 1; i < l; i++){
        s += i
    }
    console.log(s)
}
*/
/*
let n = 5
let arr = []
let s = 0
for(let i = 0; i <= n; i++){
    arr[i] = +prompt(i + ' - index uchun son kiriting')
}
for(let i = 0; i <= arr.length - 1; i++){
    s += arr[i]
}
console.log(s)
*/
/*
let arr = [1,2,3,4,5,6]
for(let i = 0; i <= arr.length - 1; i++){
    console.log(arr[i])
}
*/

/* i arr ni ichidagi qiymatlarni oladi
let arr = [1,2,3,4,5,6]
arr.reverse()
for(i of arr){
    console.log(i)
}
*/
/* i arr ni ichidagi indexlarni oladi satr qilib
let arr = [1,2,3,4,5,6]
arr.reverse()
for(i in arr){
    console.log(i)
}
*/

/*
let arr = []
let n = 10
let s = 0
for(let i = 0; i <= n-1; i++){
    arr.push(parseInt(Math.random() * 100))
}
for(elem of arr){
    s += elem
}
console.log(arr)
console.log(s / arr.length)
*/

/*
let arr = ['fasfdas', 'asfsaa', 5, 8, 'awdsaas', 6]
for(elem of arr){
    if(typeof elem == "string"){
        console.log(elem)
    }
}
*/

/*
let arr = []
let n = 5
for(let i = 0; i <= n-1; i++){
    arr.push(+prompt('element kiriting'))
}
console.log(arr)
let isJuft = prompt('Juft and Toq')
if(isJuft == 'juft' || isJuft == 'Juft'){
    for(index in arr){
        if(index % 2 == 0){
            console.log(arr[index])
        }
    }
}
if(isJuft == 'toq' || isJuft == 'Toq'){
    for(index in arr){
        if(index % 2 == 1){
            console.log(arr[index])
        }
    }
}
*/

/*
let arr = [1,2,1,5,2,8,5,1]
console.log(arr)
for(index in arr){
    for(indexEach in arr){
        if(index != indexEach){
            if(arr[index] == arr[indexEach]){
                arr.splice(indexEach, 1)
            }
        }
    }
}
console.log(arr)
*/

/*
2 x 1 = 2*1
2 x 2 = 2*2
...
2 x 10 = 2*10
*/

/*
let karra = +prompt('Sizga nechi kara kerak')
for(let i = 1; i<=10; i++){
    console.log(`${karra} x ${i} = ${karra * i}`)
}
*/

//alert('saytga kirdiz')

/*
let prom = prompt('input kiriting')
console.log(prom, typeof prom)
*/

/*
let bool = confirm('saytdan chiqmoqchimisz')
console.log(bool, typeof bool)
*/
/*
console.log('Hello', 'Islom')
console.log('%s Hello', 'Islom')
console.log('%d place', 32)
console.log('%c Hello World', 'color:red; background: #0000ff; font-size: 50px')
console.warn('Siz notogri malumot kiritdiz')
console.error('Siz notogri malumot kiritdiz')
*/

/*
let arr = [[1,2],[1,5],[2,8],[5,1]]
console.table(arr)
*/
// let arr = []

// console.time('Regular for loop')

// for (let i = 0; i < 5000000; i++) {
//     arr.push(arr)
// }

// console.timeEnd('Regular for loop') 
// 0 comments on commi