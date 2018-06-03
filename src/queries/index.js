import gql from 'graphql-tag'

export const LOGIN = gql`
query logIn($email: String!, $password: String!) {
  logIn(email: $email, password: $password) {
    _id
    email
    token
    firstname
    lastname
  }
}
`

export const INIT_MOVIES = gql`
query{
  getInitMovies{
    title
    poster_path
    genres
    overview
    tagline
    vote_average
    release_date
  }
}
`
