import React from 'react';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <div className=" gradient-background min-h-screen flex flex-col items-center justify-center bg-dark-100">
      <h1 className="text-4xl font-bold mb-8">Login Page</h1>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
