import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const getAuthToken = () => {
  // Retrieve authentication token 
  return localStorage.getItem('authToken');
};
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
  //Add authentication headers if required
  headers: {
    Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : '',  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
