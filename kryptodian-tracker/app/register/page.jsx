import React from 'react';
import RegisterForm from '../../components/RegisterForm';

const LoginPage = () => {
  return (
    <div className=" gradient-background min-h-screen flex flex-col items-center justify-center bg-dark-100">
      <h1 className="text-4xl font-bold mb-8">Register Page</h1>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
};

export default LoginPage;
