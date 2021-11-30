import React, {useState} from 'react';
import axios from 'axios'

const BookForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const {id, addBook} = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = ({title: title, author: author});
    // console.log({title: title, author: author});
    let response = await axios.post('./books', book);
    // console.log(response.data)
    props.addBook
  }  
  return (
    <div style={styles.container}> 
      <p>{id ? "Edit Form" : "New Form"}</p>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} />
        <p>Author</p>
        <input value={author} onChange={(e)=> setAuthor(e.target.value)} />

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