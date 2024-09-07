import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((error) => console.log("error in api:", error));
  }, []); // Add the empty dependency array here

  return (
    <>
      <h1>Funny Jokes</h1>
      <h3>jokes: {jokes.length}</h3>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
