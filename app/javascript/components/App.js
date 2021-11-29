import React from 'react'
import Books from './Books';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}> Books Here </h1>
      <Books />
    </div>
  );
};

const styles = {
  container: {border: "2px solid green", maxWidth: "800px", margin: "auto"},
  header: { color: 'green' },
};
export default App;