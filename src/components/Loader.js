import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <div className="centered">
      <Spinner animation="border" role="status" className="spinner">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;