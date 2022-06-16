let books = [
    {
        id: 1,
        name: 'Alximik',
        author: 'Paolo Koelyo',
        pages: 153,
    },
    {
        id: 2,
        name: 'Shaytonat',
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
        author: 'O\'tkir Xoshimov',
        pages: 482,
    }
]

const getBookById = (id) => {
    let book = books.find((book) => id == book.id)
    console.log(book)
}
getBookById(2)

const setBookObj = (obj) => {
    books.push(obj)
    console.log(books)
}

setBookObj({
    id: 5,
    name: 'O\'tkan kunlar',
    author: 'O\'tkir Xoshimov',
    pages: 523,
})


const updateBook = (id, obj) => {
    let index = books.findIndex((book) => id == book.id)
    books[index] = {
        id: obj.id ? obj.id : books[index].id,
        name: obj.name ? obj.name : books[index].name,
        author: obj.author ? obj.author : books[index].author,
        pages: obj.pages ? obj.pages : books[index].pages
    }
}
updateBook(1, {
    name: 'html',
    author: 'Nurbek',
})
