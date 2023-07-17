import Button from '@/src/components/Button';
import Container from '@/src/components/Container';
import InputField from '@/src/components/FormElements/InputField';
import { useLoginUserMutation } from '@/src/redux/services/authAPI';
import { User, alertError, alertSuccess } from '@/src/utils';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const SignIn = (): ReactNode => {
  const { push } = useRouter();
  const [loginUser] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const res: any = await loginUser(data);

      if ('error' in res) {
        const { data } = res.error;
        const property = Object.keys(data)[0];
        const errorMessage = data[property];
        throw new Error(errorMessage);
      } else {
        localStorage.setItem('token', res.data.token);
        await push('/dashboard');
        alertSuccess('User Registered Successfully');
      }
    } catch (error: any) {
      alertError(error.message);
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label="Username"
                id="username"
                placeholder="John Doe"
                {...register('username', { required: true, minLength: 3 })}
                error={errors.username !== undefined && 'This field is required'}
              />

              <InputField
                label="Password"
                id="password"
                type="password"
                {...register('password', { required: true })}
                error={errors.password !== undefined && 'This field is required'}
              />

              <Button text="Create Accounnt" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
