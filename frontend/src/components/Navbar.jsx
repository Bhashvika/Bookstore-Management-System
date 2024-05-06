import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand text-white" href="#" style={{fontSize:"40px",fontStyle:"oblique"}}>BookStore📖</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/" style={{fontSize:"25px",fontStyle:"oblique"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/books" style={{fontSize:"25px",fontStyle:"oblique"}}>Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/addbooks" style={{fontSize:"25px",fontStyle:"oblique"}}>Add Books</Link>
              </li>
            </ul>
          
          </div>

        </div>
      </nav>
      <div className="border-bottom border-secondary "></div>
    </div>
  );
}

export default Navbar;
