import { useState } from 'react';
import './Jokes.css'

function JokeComponent() {
  const [jokeData, setJokeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/jokes/random');
      const data = await response.json();
      console.log(data);
      setJokeData(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  

  return (
    <div className="joke-container">
      {isLoading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        jokeData ? (
          <div className="joke-data">
            <p className="joke-content">{jokeData.content}</p>
            { jokeData.author && <p className="joke-author" >By: {jokeData.author.name}</p> }
          </div>
        ) : (
          <p className="joke-message" >Click the button to get a joke!</p>
        )
      )}
      <button className="joke-button" onClick={getJoke}>Get Joke</button>
    </div>
  );
}

export default JokeComponent;






