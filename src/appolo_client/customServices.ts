import {
  useQuery as useApolloQuery,
  useMutation as useApolloMutation,
  useLazyQuery as useApolloLazyQuery,
  useSubscription as useApolloSubscription,
} from '@apollo/client';
import client from './appoloClient';
import { handleGraphQLError } from './errorHandling';

export const useCustomQuery = (query: any, variables?: any) => {
  return useApolloQuery(query, {
    variables,
    client,
    onError: handleGraphQLError, 
  });
};

export const useCustomMutation = (mutation: any) => {
  return useApolloMutation(mutation, {
    client,
    onError: handleGraphQLError, 
  });
};

export const useCustomLazyQuery = (query: any) => {
  return useApolloLazyQuery(query, {
    client,
    onError: handleGraphQLError, 
  });
};

export const useCustomSubscription = (subscription: any) => {
  return useApolloSubscription(subscription, {
    client,
    onError: handleGraphQLError, // Handle errors globally
  });
};
