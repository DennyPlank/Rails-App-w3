import React from 'react';
import Book from './Book';

const Books = (props) => {
  const { books } = props;
  return (
    <div style={styles.container}> 
      <h1>Books</h1>
      {books.map((book) => (
        <Book title={book.title} author={book.author}/>
      ))}
    </div>
  );
};
  const styles = {
    container: {
    border: '1px solid red',
    margin: '10px',
    padding: '10px',
  }
};

export default Books;