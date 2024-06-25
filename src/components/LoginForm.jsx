import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { login, apiError } = useAuth();

  const sendLoginSubmit = async (data) => {
    await login(data);
  };

  return (
    <div className="loginFormMainDiv">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(sendLoginSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
          />
          {errors.username && <p>This field is required</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors.password && <p>This field is required</p>}
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
        {apiError && <p>{apiError.message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
