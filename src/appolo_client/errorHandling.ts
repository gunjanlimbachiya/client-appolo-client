import { ApolloError } from '@apollo/client';

export const handleGraphQLError = (error: ApolloError) => {
  if (error.networkError) {
    console.error('Network Error:', error.networkError);
    // Handle network errors 
  }

  if (error.graphQLErrors) {
    error.graphQLErrors.forEach(graphQLError => {
      console.error('GraphQL Error:', graphQLError);
      // Handle GraphQL errors (e.g., incorrect query, insufficient permissions)
    });
  }

  
};
