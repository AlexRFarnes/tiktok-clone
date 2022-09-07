import { useDispatch } from 'react-redux';
import { signIn } from '../store/user';
import { useForm } from 'react-hook-form';
import UserFormLayout from './UserFormLayout';
import AppInput from '../components/AppInput';
import { AppButton } from '../theme';

const SignIn = () => {
  let dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    dispatch(
      signIn({
        credentials: data,
      })
    );
  };

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput
          type='email'
          label='Email'
          {...register('email', { required: true })}
        />
        <AppInput
          type='password'
          label='Password'
          {...register('password', { required: true })}
        />
        <AppButton type='submit' value='Send' small>
          Log In
        </AppButton>
      </form>
    </UserFormLayout>
  );
};

export default SignIn;
