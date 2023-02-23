function getTotalBooksCount(books) {
  return (books.length);
}

function getTotalAccountsCount(accounts) {
  return (accounts.length);
}

function getBooksBorrowedCount(books) {
  let result = 0;
  books.forEach(book => {
    if(book.borrows[0].returned===false){result=result+1;} 
  })
  return result;
}

function getMostCommonGenres(books) {
  let result=[];
  let count = 0;
  let obj=[];
  books.forEach( book => {
    let {genre} = book;
    result.push(genre)
  })
  result.sort((letterA, letterB) => (letterA < letterB)?-1:1);
  let name = result[0];
  result.forEach(item => {
    if(item === name){
      count++;
      name = item;
    } else {
      obj.push({name, count})
      name = item;
      count = 1;
    }
  })
  obj.sort((counterA,counterB) => counterB.count - counterA.count);
  const final = obj.slice(0,5);
  return final;
}

function getMostPopularBooks(books) {
  let count =0;
  let name;
  let obj=[];
  books.forEach(book => {
    count = book.borrows.length;
    name = book.title;
    obj.push({name, count})
  })
  obj.sort((countA, countB) => countB.count - countA.count)
  const final = obj.slice(0,5);
  return final;
}

function getMostPopularAuthors(books, authors) {
  let obj=[];
  let obj2=[];
  
  books.forEach(book => {
    const {authorId, borrows} = book;
    const authorPerBook = borrows.length;
    const name = getAuthor(authors, authorId);
    const count = authorPerBook;
    const push = {name, count};
    obj.push(push);
  })
  obj.sort((letterA, letterB) => (letterA.name < letterB.name)?-1:1);
  const authorList = obj.map((authorName) => authorName.name)
  const authorsOnly = authorList.filter((item, index) => authorList.indexOf(item) === index);
  authorsOnly.forEach(name => {
    let count = 0;
    obj.forEach(authors => {
      if(name === authors.name){
        count = count + authors.count;
      }
    })
    const push = {name, count};
    obj2.push(push);
  })
  obj2.sort((numberA, numberB) => (numberB.count - numberA.count));
  const final = obj2.slice(0,5);
  return final;
}

function getAuthor(authors, authorId){
  let result;
  authors.forEach(author => {
    if(author.id == authorId){
      const {name:{first, last}} = author;
      result = `${first} ${last}`;
    }
  })
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
