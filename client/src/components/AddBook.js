import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { flowRight as compose } from 'lodash';
import { Form, Input, Select, Button } from 'semantic-ui-react';

import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries';
import { ValuesOfCorrectTypeRule } from 'graphql';

const AddBook = () => {
  const [addBook, setAddBook] = useState({
    name: '',
    genre: '',
    author: '',
  });
  const { loading, data } = useQuery(getAuthorsQuery);
  if (data) {
    console.log(data.authors);
  }

  const [addBookDetails] = useMutation(addBookMutation, {
    variables: {
      name: addBook.name,
      genre: addBook.genre,
      authorId: addBook.author,
    },
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    addBookDetails({
      variables: {
        name: addBook.name,
        genre: addBook.genre,
        authorId: addBook.author,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
    // setAddBook({ name: '', genre: '', author: '' });
    console.log('state', addBook.name);
  };

  return (
    <div>
      <Form onSubmit={submitFormHandler} className={'form'}>
        <Form.Field required className={'field'}>
          <label>Book name</label>
          <Input
            placeholder="Book name"
            onChange={(e) => setAddBook({ ...addBook, name: e.target.value })}
          />
        </Form.Field>
        <Form.Field required className={'field'}>
          <label>Genre</label>
          <Input
            placeholder="Genre"
            onChange={(e) => setAddBook({ ...addBook, genre: e.target.value })}
          />
        </Form.Field>
        {loading ? (
          <h2>Loading Authors...</h2>
        ) : (
          <Form.Field className={'field'}>
            <label>Author</label>

            <Select
              onChange={(e, { value }) =>
                setAddBook({ ...addBook, author: value })
              }
              options={
                loading
                  ? 'loading authors'
                  : data.authors.map((author) => {
                      return {
                        key: author.id,
                        value: author.id,
                        text: author.name,
                      };
                    })
              }
            />
          </Form.Field>
        )}
        <button type="submit">+</button>
      </Form>
    </div>
  );
};

export default AddBook;
