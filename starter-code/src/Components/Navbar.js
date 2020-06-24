import React from 'react';

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          IronBeers
        </a>
      </div>
    </nav>
  );
}

export default Navbar;