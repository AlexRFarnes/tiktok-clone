import { useDispatch } from 'react-redux';
import { signUp } from '../store/user';
import { useForm } from 'react-hook-form';
import UserFormLayout from './UserFormLayout';
import AppInput from '../components/AppInput';
import { AppButton } from '../theme';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    await dispatch(
      signUp({
        credentials: data,
      })
    );
    navigate('/videos');
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
          type='text'
          label='Username'
          {...register('username', { required: true })}
        />
        <AppInput
          type='password'
          label='Password'
          {...register('password', { required: true })}
        />
        <AppButton type='submit' value='Send' small>
          Create account
        </AppButton>
      </form>
    </UserFormLayout>
  );
};

export default SignUp;
