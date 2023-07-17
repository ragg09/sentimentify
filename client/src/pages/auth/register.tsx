import Button from '@/src/components/Button';
import Container from '@/src/components/Container';
import InputField from '@/src/components/FormElements/InputField';
import { useRegisterUserMutation } from '@/src/redux/services/authAPI';
import { User, alertError, alertSuccess } from '@/src/utils';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const Register = (): ReactNode => {
  const { push } = useRouter();
  const [registerUser] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const res: any = await registerUser(data);

      if ('error' in res) {
        const { data } = res.error;
        const property = Object.keys(data)[0];
        const errorMessage = data[property];
        throw new Error(errorMessage);
      } else {
        await push('/auth/sign-in');
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
                label="First Name"
                id="first_name"
                placeholder="John"
                {...register('first_name', { required: true, minLength: 3 })}
                error={
                  errors.first_name !== undefined &&
                  'This field is required and must have at least 3 characters'
                }
              />

              <InputField
                label="Last Name"
                id="last_name"
                placeholder="Doe"
                {...register('last_name', { required: true, minLength: 3 })}
                error={
                  errors.last_name !== undefined &&
                  'This field is required and must have at least 3 characters'
                }
              />

              <InputField
                label="Username"
                id="username"
                placeholder="John Doe"
                {...register('username', { required: true, minLength: 3 })}
                error={
                  errors.username !== undefined &&
                  'This field is required and must have at least 3 characters'
                }
              />

              <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="example@example.com"
                {...register('email', { required: true })}
                error={
                  errors.email !== undefined &&
                  'This field is required and must have at least 3 characters'
                }
              />

              <InputField
                label="Password"
                id="password"
                type="password"
                {...register('password', { required: true })}
                error={
                  errors.password !== undefined &&
                  'This field is required and must have at least 8 characters'
                }
              />

              <InputField
                label="Confirm Password"
                id="confirm_password"
                type="password"
                {...register('confirm_password', {
                  required: true,
                  validate: (value) => value === watch('password'),
                })}
                error={
                  errors.confirm_password && errors.confirm_password.type === 'required'
                    ? 'This field is required'
                    : errors.confirm_password && errors.confirm_password.type === 'validate'
                    ? 'Password does not match'
                    : undefined
                }
              />

              <Button text="Create Accounnt" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
