import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gradient-background">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
      <Link href="/login">
        <h2 className="my-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Go to Login</h2>
      </Link>
      <Link href="/register">
        <h2 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Register</h2>
      </Link>
    </div>
  );
};

export default HomePage;
