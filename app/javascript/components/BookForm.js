import React from 'react';

const BookForm = (props) => {
  const {id} = props;
  return (
    <div style={styles.container}> 
      <p>{id ? "Edit Form" : "New Form"}</p>
      <form>
        <p>Title</p>
        <input />
        <button>{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};
  const styles = {
    container: {
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
  }
};

export default BookForm;