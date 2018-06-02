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
