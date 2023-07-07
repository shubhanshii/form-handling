import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [formData, setFormData]= useState({
        name: '',
email: '',
Contact: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Contact: ${formData.Contact}`
        );
    };

  return (
   <form onSubmit={handleSubmit}>
    <label>Name: </label>
    <input type='text' name='name' value={formData.name} onChange={handleChange} />
    
    <br>
    </br>
    <label>Email:  </label>
    <input name='email'  type='email' value={formData.email} onChange={handleChange}/>
   <br></br>
    <label>Contact:  </label>
    <input type='number' name='Contact' value={formData.Contact} onChange={handleChange}/>
   <br></br>
    <button type='submit'>submit</button>
    
   </form>
   
  )
}

export default Form