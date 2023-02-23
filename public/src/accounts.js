function findAccountById(accounts,id){
  let result;
  accounts.forEach((account) => {
      const match = account.id;
      if(match===id){ result = account}
  });
  return result;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((letterA, letterB) => 
    (letterA.name.last > letterB.name.last ?1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows({id}, books) {
  let result = 0;
  books.forEach(book =>{
    const borrow = book.borrows
    borrow.forEach(ids => {if (id === ids.id)result++})
  });
  return result;
}

function getBooksPossessedByAccount({id}, books, authors) {
  let obj =[];
  books.forEach( book => {
    book.borrows.forEach( borrow => {
      if(borrow.id === id && borrow.returned === false){
        
        const {id, title, genre, authorId, borrows} = book;
        const author = findAuthor(authorId, authors);
        const push = {id, title, genre, authorId, author, borrows}
        obj.push(push);
      }
    })
  })
  return obj;

}

function findAuthor(authorId, authors){
  let result;
  authors.forEach(author => {
    if(author.id === authorId){
      result = author;
    }
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
