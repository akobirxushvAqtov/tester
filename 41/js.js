let arr = {
    name: 'Akobir',
    surName: 'Xushvaqtov'
}

let strBooks = JSON.stringify(arr, undefined, 4)
localStorage.setItem('arr', strBooks)

let strBook = localStorage.getItem('arr')
let person = JSON.parse(strBook)
console.log(person[0])