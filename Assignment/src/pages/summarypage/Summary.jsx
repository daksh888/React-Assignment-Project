import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./SummryStyle.scss";
import BookingForm from '../../components/BookingForm';

const Summary = ({ data }) => {
  const { id } = useParams();
  const myselectedItem = data.find(item => item.show.id === parseInt(id, 10));
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingSubmit = () => {
    setShowBookingForm(false);
  };

  if (!myselectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="summary-container">
      <h2>Movie Name: {myselectedItem.show.name}</h2>
      <p>Movie Score: {myselectedItem.score}</p>
      <p>Movie Type: {myselectedItem.show.type}</p>
      <p>Movie Average: {myselectedItem.show.rating.average}</p>
      <p>Movie Language: {myselectedItem.show.language}</p>
      <p>Movie Status: {myselectedItem.show.status}</p>
      <button onClick={() => setShowBookingForm(true)}>Book My Show</button>
      
      {showBookingForm && (
        <BookingForm onBookingSubmit={handleBookingSubmit} />
      )}
    </div>
  );
};

export default Summary;
