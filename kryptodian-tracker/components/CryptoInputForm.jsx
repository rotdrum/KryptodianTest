"use client";

import React, { useState } from 'react';
import axios from 'axios';

const CryptoInputForm = () => {
  const [cryptoName, setCryptoName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [logoUrl, setLogoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/crypto', {
        name: cryptoName,
        symbol: symbol,
        logoUrl: logoUrl,
      });
      console.log(response.data); // handle successful submission
      window.location.href = '/crypto';

      // Optionally: Redirect or show success message
    } catch (error) {
      console.error('Submission failed:', error);
      // Handle submission failure (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <input
        type="text"
        placeholder="Crypto Name"
        value={cryptoName}
        onChange={(e) => setCryptoName(e.target.value)}
        required
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        required
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        placeholder="Logo URL"
        value={logoUrl}
        onChange={(e) => setLogoUrl(e.target.value)}
        required
        className="mb-4 p-2 w-full border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Crypto</button>
    </form>
  );
};

export default CryptoInputForm;
