import React, { useState, useEffect } from 'react';
import Todos from './components/todos';
import { ThemeProvider,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(items)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  })
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container className="d-flex flex-column align-items-center">
        {items.map((item)=>(<Todos todo={item}/>))}
      </Container>
    );
  }
}

export default App;
