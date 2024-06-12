"use client";

// components/CryptoList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/crypto');
        setCryptos(response.data);
      } catch (error) {
        console.error('Failed to fetch cryptos:', error);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Crypto List</h2>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id} className="mb-2 p-2 border-b last:border-b-0">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">{crypto.name}</span> - {crypto.symbol}
              </div>
              <div>
                Amount: {crypto.amount}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
