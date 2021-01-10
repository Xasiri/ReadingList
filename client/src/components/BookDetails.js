import React from 'react';
import { graphql, useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';
import { Item } from 'semantic-ui-react';

const BookDetails = (props) => {
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: props.bookId },
  });
  //   if (data) {
  //     console.log('data', data.book);
  //     const { name } = data.book;
  //     console.log('name', name);
  //   }
  function displayBookDetails() {
    console.log('props', data);

    if (data) {
      const { book } = data;

      return (
        <div>
          {book ? (
            <div>
              <h2>{book.name}</h2>
              <p>{book.genre}</p>
              <p>{book.author.name}</p>
              <p>All books by this author:</p>
              <ul className="other-books">
                {book.author.books.map((book) => {
                  return <li key={Item.id}> {book.name}</li>;
                })}
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      );
    } else {
      return <div>No book selected</div>;
    }
  }

  console.log('bookId:', props.data);
  return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
