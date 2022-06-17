let books = [
    {
        id: 1,
        name: 'Sariq devni minib',
        author: 'Xudoyberdi To\'xtaboyev',
        pages: 356,
    },
    {
        id: 2,
        name: 'Alximik',
        author: 'Paolo Koelyo',
        pages: 153,
    },
    {
        id: 3,
        name: 'Shaytanat',
        author: 'Toxir Malik',
        pages: 864,
    },
    {
        id: 4,
        name: 'Ufq romani',
        author: 'Said Ahmad',
        pages: 482,
    },
    {
        id: 5,
        name: 'Js Asoslari',
        author: 'Javlon Abdullo',
        pages: 445,
    },
    {
        id: 6,
        name: 'Html va Css Asoslari',
        author: 'Javlon Abdullo',
        pages: 652,
    }
]

const getBookById = (name) => {
    let book = books.find((book) => name == book.name)
    if(book){
        console.log(book)
    }else{
        console.log('bunday kitob mavjud emas!!!') 
    }
}
// getBookById(prompt('kitobning nomini kiriting'))
getBookById('Shaytanat') // kitobning nomini kiriting













    // let strBooks = JSON.stringify(books, undefined, 4)
    // // console.log(strBooks)
    
    // localStorage.setItem(books, strBooks)
    
    // let getBooks = localStorage.getItem(books)
    // // console.log(getBooks)
    
    // let objBooks = JSON.parse(getBooks)
    // console.log(objBooks[0])
    
    