"use client";
import React from 'react';

export default async function Page({ params, searchParams }) {
  console.log(params, searchParams);
  const name = searchParams['name'] || 'World';

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}