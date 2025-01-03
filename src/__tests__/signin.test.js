import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';

import SignInForm from '../components/SigninForm';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      render(<SignInForm onSubmit={onSubmit} />);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      await waitFor(() => {
        fireEvent.press(screen.getByText('Sign In'));
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});
