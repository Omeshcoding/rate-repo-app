import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/fragments';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  console.log(authStorage);
  const [mutate, result] = useMutation(SIGN_IN);

  const clearToken = async () => {
    await authStorage?.removeAccessToken();
  };

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    const token = await authStorage?.getAccessToken();
    console.log(1, token);
    authStorage?.setAccessToken(response.data?.authenticate?.accessToken);
    return response;
  };
  return [signIn, result];
};
export default useSignIn;
