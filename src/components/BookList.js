import React from 'react';
import '../scss/BookList.scss';
import BookCard from './BookCard';

function BookList() {
  return (
    <div className="bookListContainer">
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}

export default BookList;
