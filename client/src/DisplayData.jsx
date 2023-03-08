import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      nationality
      favoriteMovie {
        name
      }
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
      yearReleased
      blueRayAvailable
    }
  }
`

const DisplayUsers = () => {

  const { data } = useQuery(QUERY_ALL_USERS);

  if (data) {
    console.log(data);
  }
  return (
    <div>
      {data && data.users.map((user) => {
        return (
          <p>
            <span>{user.name}  </span>
            <span>{user.age}  </span>
            <span>{user.nationality}  </span>
          </p>
        )
      })}
    </div>
  )
}

const DisplayMovies = () => {
  const { data, error } = useQuery(QUERY_ALL_MOVIES);

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      { error && <p>Oops! There's an error! </p> }
      { data && 
        <div>
          <h2>Movies</h2>
          {data.movies.map(movie => {
            return (
              <p key={movie.id}>
                <span>Name: { movie.name } </span>
                <span>Year of Release: { movie.yearReleased } </span>
                <span>Blue Ray Available: { movie.blueRayAvaliable ? <span>Yes</span> : <span>No</span> }</span>
              </p>  
            )
          })}
        </div>}
    </div>
  )
}

const comps = { DisplayUsers, DisplayMovies }

export default comps;