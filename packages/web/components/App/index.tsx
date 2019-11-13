import React from 'react';
import 'cross-fetch/polyfill';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from 'react-apollo';
// import { useAsync, useAsyncCallback } from 'react-async-hook';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: false,
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({ uri: process.env.API_GRAPHQL_URL })
  });

const apolloClient = createApolloClient();

const App: React.FC = ({ children }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);

// const getClarifai = async (): Promise<any> =>
//   (await fetch(`${process.env.REACT_APP_API_URL}/clarifai`)).json();

// const getRecipes = async (): Promise<any> =>
//   (await fetch(`${process.env.REACT_APP_API_URL}/recipes`)).json();

// const App: React.FC = () => {
//   const { loading, result } = useAsync(getClarifai, [1]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {loading ? (
//           <div>Chargement</div>
//         ) : (
//           <ul>
//             {result.map((item: any) => (
//               <li>{item.name}</li>
//             ))}
//           </ul>
//         )}
//         <Recipes />
//       </header>
//     </div>
//   );
// };

// const Recipes: React.FC = () => {
//   const getRecipesList = useAsyncCallback(getRecipes);

//   return (
//     <>
//       <button
//         type="button"
//         onClick={getRecipesList.execute}
//         disabled={getRecipesList.loading}>
//         Get recipes
//       </button>
//       {getRecipesList.result && (
//         <ul>
//           {getRecipesList.result.map((item: any) => (
//             <li>{item.title}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

export default App;
