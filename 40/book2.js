let books = [
    {
        id: 1,
        name: 'Alximik',
        author: 'Paolo Koelyo',
        pages: 153,
    },
    {
        id: 2,
        name: 'Shaytanat',
        author: 'Toxir Malik',
        pages: 864,
    },
    {
        id: 3,
        name: 'Sariq devni minib',
        author: 'Xudoyberdi To\'xtaboyev',
        pages: 356,
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

const setBookName = (newObj) =>{
    books.push(newObj)
    console.log(books)
}
setBookName ({
        id: 7,
        name: 'O\'tgan kunlar',
        author: 'O\'tkir Hoshimov',
        pages: 252,
    }
)
const addBook = (id, obj) => {
    let i =  books.findIndex((book)  => id == book.id) 
    books[i] = {
        id: obj.id ? obj.id : books[i].id,
        name: obj.name ? obj.name : books[i].name,
        author: obj. author ? obj.author : books[i].author,
        pages: obj.pages ? obj.pages : books[i].pages
    }
}

addBook(7, {
    id: 7,
    name: 'Xamsa',
    author: 'Alisher Navoiy',
    pages: 2000
})

    
// qo'shmcha

const authorBook = (name) => {
        let bookName = books.find((book) => name == book.name)
        if(bookName){
            console.log(bookName.author)
        }else{
            console.log('bunday kitob mavjud emas!!!')
        }
    }
authorBook('Xamsa')