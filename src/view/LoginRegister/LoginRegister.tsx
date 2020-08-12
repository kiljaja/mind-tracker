import React, { FC, useState } from 'react';
import './LoginRegister.scss';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/auth-context';
import mindToon from '../../images/full-mind-toon.png';

interface DataI {
  username: string;
  password: string;
}

export const LoginRegister: FC = () => {
  const { login, register: authRegister, isLoggedIn, authError } = useAuth();
  const { register, handleSubmit, errors } = useForm();
  const [isLoginForm, setIsLoginForm] = useState(true);

  const onSubmit = (data: DataI) => {
    const { username, password } = data;
    isLoginForm ? login(username, password) : authRegister(username, password);
    console.log(authError);
  };

  const swapForm = (): void => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="login-register">
      <div className="intro">
        <h1>Mind Tracking</h1>
        <img className="brain-toon" src={mindToon} alt="Large brain cartoon" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <h2
            onClick={() => setIsLoginForm(true)}
            className={isLoginForm ? 'active' : ''}
          >
            Login
          </h2>
          <span>/</span>
          <h2
            onClick={() => setIsLoginForm(false)}
            className={!isLoginForm ? 'active' : ''}
          >
            Register
          </h2>
        </div>
        <p className="error-warning">{authError ? authError.message : ''}</p>

        <input
          type="text"
          placeholder="username"
          name="username"
          ref={register({ required: true, minLength: 4, maxLength: 30 })}
        />

        <p className="error-warning">
          {errors.username
            ? 'username is required and must be 4-30 character long'
            : ''}
        </p>

        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register({ required: true, minLength: 4, maxLength: 30 })}
        />
        <p className="error-warning">
          {errors.password
            ? 'password is required and must be 4-30 character long'
            : ''}
        </p>

        <input
          className="btn"
          type="submit"
          value={isLoginForm ? 'Login' : 'Register'}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            login('demoUser', 'pass');
          }}
          className="demo-btn btn"
        >
          Use Demo User
        </button>

        <hr />

        <p className="swap-form-msg">
          {isLoginForm
            ? `Don't have an account? `
            : `Already have an account? `}
          <span className="swap-form-btn" onClick={swapForm}>
            {isLoginForm ? 'Login' : 'Register'}
          </span>
        </p>
      </form>
    </div>
  );
};
