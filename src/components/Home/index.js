import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import {v4 as uuid} from "uuid";

import './index.css'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    destinations: '',
    travelers: '',
    tripDuration: '',
    accommodation: '',
    transportation: '',
    interests: '',
    specialRequests: '',
  });
  const [formDataList, setFormDataList] = useState([]) 

  useEffect(() => {
    localStorage.setItem("userFormDataList", JSON.stringify(formDataList))
  })


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      ...formData
    };
    console.log(newUser)
    setFormDataList(prevList => ([...prevList, newUser]))
    setFormData({
      ...formData,
      name: '',
      email: '',
      phone: '',
      travelDates: '',
      destinations: '',
      travelers: '',
      tripDuration: '',
      accommodation: '',
      transportation: '',
      interests: '',
      specialRequests: ''
    });
    handleCloseModal();
    
  };

  return (
    <div className="home-container">
        <Navbar />
        <div className='creat-mytrip-feature'>
            <h1 className='heading'>Explore the world wherever you want</h1>
            <p className='description'>Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.</p>
            <button type='button' className='button' onClick={handleOpenModal}>Create My Trip</button>
        </div>
        <div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className='modal-header'>
                <div>
                  <h1 class="title">Almost There!</h1>
                  <p class="subtitle">We need a bit more info to make your trip:</p>
                </div>
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
              </div>
              <div className='form-div-container'>
                <form onSubmit={handleSubmit}>
                  <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                <input
                  type="text"
                  name="travelDates"
                  value={formData.travelDates}
                  onChange={handleChange}
                  placeholder="Travel Dates"
                />
                <input
                  type="text"
                  name="destinations"
                  value={formData.destinations}
                  onChange={handleChange}
                  placeholder="Destinations"
                />
                <input
                  type="number"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  placeholder="Number of Travelers"
                />
                <input
                  type="text"
                  name="tripDuration"
                  value={formData.tripDuration}
                  onChange={handleChange}
                  placeholder="Trip Duration"
                />
                <input
                  type="text"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
                  placeholder="Accommodation"
                />
                <input
                  type="text"
                  name="transportation"
                  value={formData.transportation}
                  onChange={handleChange}
                  placeholder="Transportation"
                />
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="Interests"
                />
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Special Requests"
                />
                <button type="submit" className='submit-button'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}
    </div>
    </div>
  )
}

export default Home