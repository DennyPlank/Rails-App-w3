import React from 'react'

const Book = (props) =>{
  const { title, author } = props;
  return (
    <div style={styles.container}> 
      <h1>Title: {title} </h1>
      <h2>Author: {author}</h2>
    </div>
  );
};
const styles = {
  container: {
  border: '1px solid blue',
  margin: '10px',
  padding: '10px',
}
};
export default Book;