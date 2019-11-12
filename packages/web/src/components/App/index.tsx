import React, { useState, useEffect } from 'react';
// @ts-ignore
import './index.css';

const image =
  'http://recettescookeo.com/wp-content/uploads/2015/03/recettes-plats-cookeo.jpg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="test" />
        <ul>
          {/* {concepts.map((item: any) => (
            <li>{item.name}</li>
          ))} */}
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
