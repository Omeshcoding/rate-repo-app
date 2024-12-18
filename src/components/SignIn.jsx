import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be greater than 8 characters')
    .required('Password is required'),
});

const styles = StyleSheet.create({
  signinview: {
    marginHorizontal: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 14,
    color: 'gray',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 5,
    margin: 10,
  },
  errorBorders: {
    borderColor: '#d73a4a',
  },
  button: {
    color: theme.colors.textWhite,
    backgroundColor: theme.colors.primary,
    paddingVertical: 18,
    textAlign: 'center',
    margin: 10,
    borderRadius: 5,
    fontWeight: theme.fontWeights.bold,
  },
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.signinview}>
      <TextInput
        style={[styles.input, formik.errors.username && styles.errorBorders]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red', marginHorizontal: 10 }}>
          {formik.errors.username}{' '}
        </Text>
      )}
      <TextInput
        style={[styles.input, , formik.errors.password && styles.errorBorders]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red', marginHorizontal: 10 }}>
          {formik.errors.password}{' '}
        </Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });

      navigate(-1);
    } catch (e) {
      console.log(e);
    }
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
