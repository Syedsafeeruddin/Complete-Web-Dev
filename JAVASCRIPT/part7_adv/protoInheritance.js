function Book(name){
    this.name = name
}

Book.prototype.favBook = function(){
    console.log(`My favourite Book is ${this.name}`)
}

let bookOne = new Book("Deep Work")
bookOne.favBook()


