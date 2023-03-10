function findAuthorById(authors, id) {
  let result;
  authors.forEach((author) => {
    if(author.id === id){result=author}
  });
  return result;
}

function findBookById(books, id) {
  let result;
  books.forEach(book =>{
    if(book.id === id){result = book}
  });
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let arrayTrue=[];
  let arrayFalse=[];
  let result;
  books.forEach(book => {
    (book.borrows[0].returned)? arrayTrue.push(book) : arrayFalse.push(book);
  })
  result = [arrayFalse, arrayTrue];
  return result; 
  const test = books.reduce();
}

function getBorrowersForBook({borrows}, accounts) {
  let result = [];
    borrows.forEach(borrow => {
      accounts.forEach(account => {
        if(account.id === borrow.id){
          const {picture, age, name, company, email, registered} = account;
          const push = {...borrow, picture, age, name, company, email, registered};
          result.push(push);
        }
      })
    })
  const final = result.slice(0,10);
  return final;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
