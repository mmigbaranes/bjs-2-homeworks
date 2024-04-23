class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
    }
  
    fix(){
        this.state = this.state * 1.5;
    }

    set state(state){
      if(state < 0){
        this._state = 0;
      } else if(state > 100){
        this.state = 100;
      } else {
        this._state = state;
      }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
          this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
      constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
          this.type = "book";
          this.author = author;
      }
  }
  
  class NovelBook extends Book {
      constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
          this.type = "novel";
          this.author = author;
        }
  }
  
  class FantasticBook extends Book {
      constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
          this.author = author;
          this.type = "fantastic";
          }
  }
  
  class DetectiveBook extends Book {
      constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
          this.state = 100;
          this.author = author;
          this.type = "detective";
          }
  }

  class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        let result = this.books.find(book => book[type] ===value);
        return result || null;
    }
    giveBookByName(bookName){
        let result = this.books.find(book => book.name === bookName);
        let index = this.books.indexOf(result);
        this.books.splice(index, 1);
      return result || null;
    }
}