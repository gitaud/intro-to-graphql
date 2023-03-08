import React from 'react';
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

import comps from './DisplayData';
import "./App.css";

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000"  
  })
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>List of Users</h1>
        <comps.DisplayUsers />
        <comps.DisplayMovies />
      </div>
    </ApolloProvider>
  )

}

export default App;