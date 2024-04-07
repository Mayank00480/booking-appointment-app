import React, { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
function Form() {
  // State variables for form fields
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation or submit data here
    
    axios.post('http://localhost:4000/add',{
      data : {
        userName,
        email,
        phoneNumber
      }
    }).then(res => {
      const {data} = res;
      toast.success(data);
      console.log(res , 'post result');
      navigate('/apointments')
    })
    .catch(err => {
      console.log(err);
    })
    // Reset form fields
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit} method='POST' action = '/'>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
