import React, { useState } from 'react';

const BookingForm = ({ onBookingSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const userData = {
      name,
      email,
    };

    localStorage.setItem('userData', JSON.stringify(userData));


    onBookingSubmit();
    alert('Do you wants to book your show?')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
