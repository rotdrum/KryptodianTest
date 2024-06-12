// pages/crypto.jsx

import React from 'react';
import CryptoList from '../../components/CryptoList';
import CryptoInputForm from '../../components/CryptoInputForm';

const CryptoPage = () => {
  return (
    <div className=" gradient-background min-h-screen flex flex-col items-center justify-center bg-dark-100">
      <h1 className="text-3xl font-bold mb-4">Crypto Page</h1>
      <CryptoInputForm />
      <div className='my-4'>
        <hr/>
      </div>
      <CryptoList />
    </div>
  );
};

export default CryptoPage;
