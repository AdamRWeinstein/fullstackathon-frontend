import React, { useState } from 'react';
import Client from '../services/api';

const AddRideForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    thrill: '',
    height: '',
    pass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Client.post('rides', formData); 

      setFormData({
        name: '',
        image: '',
        description: '',
        thrill: '',
        height: '',
        pass: ''
      });
      console.log('Ride added successfully');
    } catch (error) {
      console.error('Error adding ride:', error);
     
    }
  };

  return (
    <div>
      <h2>Add a New Ride</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Thrill Level:</label>
          <select name="thrill" value={formData.thrill} onChange={handleChange}>
          <option value="">Select Thrill Level</option>
            <option value="Mild">Mild</option>
            <option value="Moderate">Moderate</option>
            <option value="Maximum">Maximum</option>
          </select>
        </div>
        <div>
          <label>Height Requirement:</label>
          <input type="text" name="height" value={formData.height} onChange={handleChange} />
        </div>
        <div>
          <label>Pass Requirement:</label>
          <select name="pass" value={formData.pass} onChange={handleChange}>
            <option value="">Select Pass Requirement</option>
            <option value="Platinum">Platinum</option>
            <option value="Gold and Platinum">Gold and Platinum</option>
            <option value="Regular, Gold and Platinum">Regular, Gold and Platinum</option>
          </select>
        </div>
        <button type="submit">Add Ride</button>
      </form>
    </div>
  );
};

export default AddRideForm;