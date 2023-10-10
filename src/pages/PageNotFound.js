import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <>
    <Link to='/' className='btn btn-outline-secondary m-5'>Back</Link>
    <div className='pagenotfound'>
      <h1 className='ptitle'>404 - Page Not Found</h1>
      <p className='pdesc'>The page you are looking for does not exist.</p>
    </div>
    </>
  );
}

export default PageNotFound;