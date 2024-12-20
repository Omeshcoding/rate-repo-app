import { useApolloClient, useQuery } from '@apollo/client';
import { SIGN_OUT } from '../graphql/fragments';
import createApolloClient from '../utils/apolloClient';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
    } catch (error) {
      console.log(error);
    }
  };
  return signOut;
};

export default useSignOut;
