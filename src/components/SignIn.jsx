import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInForm from './SigninForm';

const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });

      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
