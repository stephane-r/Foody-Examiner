/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useAsync, useAsyncCallback } from 'react-async-hook';

const getClarifai = async (): Promise<any> =>
  (await fetch(`${process.env.REACT_APP_API_URL}/clarifai`)).json();

const getRecipes = async (): Promise<any> =>
  (await fetch(`${process.env.REACT_APP_API_URL}/recipes`)).json();

const App: React.FC = () => {
  const { loading, result } = useAsync(getClarifai, [1]);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <div>Chargement</div>
        ) : (
          <ul>
            {result.map((item: any) => (
              <li>{item.name}</li>
            ))}
          </ul>
        )}
        <Recipes />
      </header>
    </div>
  );
};

const Recipes: React.FC = () => {
  const getRecipesList = useAsyncCallback(getRecipes);

  return (
    <>
      <button
        type="button"
        onClick={getRecipesList.execute}
        disabled={getRecipesList.loading}>
        Get recipes
      </button>
      {getRecipesList.result && (
        <ul>
          {getRecipesList.result.map((item: any) => (
            <li>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
