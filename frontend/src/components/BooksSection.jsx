import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const BooksSection = ({ data }) => {
  const [Data, setData] = useState(data);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({});
  const [selectedBookId, setSelectedBookId] = useState('');

  useEffect(() => {
    setData(data);
  }, [data]);

  const toggleUpdateForm = (id, book) => {
    setShowUpdateForm(!showUpdateForm);
    setSelectedBookId(id);
    setUpdatedFields(book);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFields({
      ...updatedFields,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/updatebooks/${selectedBookId}`, updatedFields);
      if (response.status === 200) {
        console.log('Book updated successfully');
        setShowUpdateForm(false);
      } else {
        console.error('Failed to update book');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const Delete= async (id)=>{
    try{
      const response=await axios.delete(`http://localhost:3000/api/v1/deletebooks/${id}`)
      if(response.status===200){
        setData(Data.filter((book)=>book._id!==id));
      }
      else{
        alert("failed to delete book");
      }
    }
    catch(err){
      console.error('Error:',err);
    }
  }

  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
      {data &&
        data.map((item, index) => (
          <div
            className='my-3'
            style={{ width: '200px', height: '350px', borderRadius: '20px', border: '1px solid white' }}
            key={index}
          >
            <div>
              <img
                style={{ width: '200px', height: '190px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                className='img-fluid'
                src={item.image}
                alt='/'
              />
            </div>
            <h6 className='text-white p-2 mx-2 my-1' style={{ fontSize: '15px', fontStyle: 'oblique' }}>
              {item.bookname && item.bookname.slice(0, 10)}....
            </h6>
            <b className='mb-0 px-2' style={{ fontSize: '30px', color: 'purple' }}>
              Rs.{item.price}
            </b>
            <div className='d-flex justify-content-between align-items-center p-2 m-0'>
              <button className='btn btn-primary' onClick={() => toggleUpdateForm(item._id, item)}>UPDATE</button>
              <button className='btn btn-danger' onClick={() => Delete(item._id)}>DELETE</button>
            </div>
            {showUpdateForm && selectedBookId === item._id && (
              <div>
                <input
                  type='text'
                  name='bookname'
                  value={updatedFields.bookname}
                  placeholder={`Current: ${item.bookname}`}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='description'
                  value={updatedFields.description}
                  placeholder={`Current: ${item.description}`}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='author'
                  value={updatedFields.author}
                  placeholder={`Current: ${item.author}`}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='image'
                  value={updatedFields.image}
                  placeholder={`Current: ${item.image}`}
                  onChange={handleInputChange}
                />
                <input
                  type='number'
                  name='price'
                  value={updatedFields.price}
                  placeholder={`Current: ${item.price}`}
                  onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Submit</button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
