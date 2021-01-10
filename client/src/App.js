import React from 'react';
import AddBook from './components/AddBook';
import NewForm from './components/NewForm';
import BookList from './components/BookList';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div id="main">
      <h1>My Reading Book List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
client;
