import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! something wen't wrong. Please try again later</h1>
      <p>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
