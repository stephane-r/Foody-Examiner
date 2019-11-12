import React, { useState, useEffect } from 'react';
// @ts-ignore
import Clarifai from 'clarifai';
// @ts-ignore
import './index.css';

const app = new Clarifai.App({
  apiKey: 'bcdc87e24b314c9d9d4dae72d641b65b'
});

const image =
  'http://recettescookeo.com/wp-content/uploads/2015/03/recettes-plats-cookeo.jpg';

const App: React.FC = () => {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    app.models.predict(Clarifai.FOOD_MODEL, image).then(
      function(response: any) {
        console.log(response.outputs[0].data.concepts);
        setConcepts(response.outputs[0].data.concepts);
      },
      function(err: any) {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="test" />
        <ul>
          {concepts.map((item: any) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <Recipe />
      </header>
    </div>
  );
};

const Recipe: React.FC = () => {
  const test = async () => {
    try {
      const request = await fetch(
        'https://api.spoonacular.com/recipes/search',
        { method: 'GET' }
      );
      const response = await request.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button type="button" onClick={test}>
      Get recipe
    </button>
  );
};

export default App;
