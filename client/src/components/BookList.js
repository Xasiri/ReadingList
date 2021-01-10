import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
// import gql from 'graphql';

const BookList = () => {
  const [selected, setSelected] = useState(null);
  const { loading, data: { books: books } = {} } = useQuery(getBooksQuery);

  return (
    <div>
      {loading ? (
        <h2>Loading Posts...</h2>
      ) : (
        <ul id="book-list">
          {books &&
            books.map((book) => (
              <li key={book.id} onClick={(e) => setSelected(book.id)}>
                {book.name}
              </li>
            ))}
        </ul>
      )}
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
