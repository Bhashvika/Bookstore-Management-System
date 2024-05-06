
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
  const image=require("../images/book-bg.jpeg")
  return (
    <div className='Home-Page justify-content-center align-items-center flex-column bg-dark text-light container-fluid' style={{ minHeight: "100vh" }}>
      <div className='container'>
        <div className='row container '>
          <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{height:"91.5vh"}}>
            <h2 style={{fontSize:"100px"}}>BOOK STORE </h2>
            <h3 style={{fontSize:"60px"}}>FOR YOU</h3>
            <p className="mb-0" style={{color:"silver"}}>Checkout The Books From Here.</p>
            
            <Link to="/books" className='viewbook my-3' style={{textDecoration:"none"}}>View Books</Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center fles-column" style={{height:"91.5vh"}}>
            <img className="img-fluid homeimg" src={image} alt="book background" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
