import React, { useState } from 'react'
import axios from "axios";
function Addbooks() {
  const [Data,setData]=useState({bookname:"",author:"",description:"",image:"",price:""});
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  
  const submit=async (e)=>{
    e.preventDefault();
      await axios.post("http://localhost:3000/api/v1/add",Data)
      .then((res)=>{
       alert(res.data.message)
      });
      setData({bookname:"",author:"",description:"",image:"",price:""});
  };

  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh"}}>
      <div className='container p-4'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Book Name</label>
          <input type='text' className='form-control' id="exampleFormControlInput1" placeholder='Enter the book name' name="bookname" value={Data.bookname} onChange={change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Author</label>
          <input type='text' className='form-control' id="exampleFormControlInput1" placeholder='Enter the Author name' name="author" value={Data.author} onChange={change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Description</label>
          <input type='text' className='form-control' id="exampleFormControlInput1" placeholder='Enter the Description' name="description" value={Data.description} onChange={change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Image</label>
          <input type='text' className='form-control' id="exampleFormControlInput1" placeholder='Enter the url of image' name="image" value={Data.image} onChange={change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Price</label>
          <input type='Number' className='form-control' id="exampleFormControlInput1" placeholder='Enter thePrice' name="price"value={Data.price} onChange={change}/>
        </div>
        <button className='btn btn-success' onClick={submit}>Submit</button>
      </div>
     
    </div>
  )
}

export default Addbooks
