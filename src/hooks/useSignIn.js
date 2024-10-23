import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/fragments';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
    return response;
  };

  return [signIn, result];
};
export default useSignIn;
