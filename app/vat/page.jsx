"use client";
import React, { useState } from 'react';

const Page = () => {
  const [amount, setAmount] = useState('');
  const [customVatRate, setCustomVatRate] = useState(process.env.NEXT_PUBLIC_VAT_RATE || '');
  const [vatAmount, setVatAmount] = useState(null);
  const [priceAfterVat, setPriceAfterVat] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = parseFloat(customVatRate) / 100; // Convert percentage to decimal
    const calculatedVat = amount * rate;
    setVatAmount(calculatedVat);
    const totalPrice = parseFloat(amount) + calculatedVat;
    setPriceAfterVat(totalPrice);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">VAT Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">VAT Rate (%):</label>
            <input
              type="number"
              value={customVatRate}
              onChange={(e) => setCustomVatRate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Calculate VAT
          </button>
        </form>
        {vatAmount !== null && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <p className="text-green-800">VAT Amount: {vatAmount.toFixed(2)}</p>
            <p className="text-green-800">Price After VAT: {priceAfterVat.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;