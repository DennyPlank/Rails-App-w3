import React, {useState, useEffect} from 'react'
import Books from './Books';
import BookForm from './BookForm'
import axios from 'axios';


const App = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(()=>{
  getBooks();
}, []);
const getBooks = async () => {
  let response = await axios.get("/books");
  setBooks(response.data)
}
  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.header}> Library of Babel </h1>
      <button onClick={toggleNewForm}>
        {showNewForm ? "Cancle" : "New Book"} 
      </button>
      {showNewForm && <BookForm />}
      <Books books={books} />
    </div>
  );
};

const styles = {
  container: {border: "2px solid green", maxWidth: "800px", margin: "auto"},
  header: { color: 'green' },
};
export default App;