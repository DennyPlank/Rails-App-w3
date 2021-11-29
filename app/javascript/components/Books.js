import React from 'react';

const Books = (props) => {
  return (
    <div style={styles.container}> 
      <h1>
        Books here
      </h1>
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