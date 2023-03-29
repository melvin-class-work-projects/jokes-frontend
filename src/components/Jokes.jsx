import { useState } from 'react';
import './Jokes.css'

function JokeComponent() {
  const [jokeData, setJokeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getJoke = async () => {
    setIsLoading(true); // set loading to true before making the API call
    try {
      const response = await fetch('http://127.0.0.1:3000/jokes');
      const data = await response.json();
      console.log(data);
      //const jokesWithAuthors = data.filter((joke) => joke.author);
      const randomJoke = data[Math.floor(Math.random() * data.length)];
      setJokeData(randomJoke);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false); // set loading back to false after the API call is complete
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





