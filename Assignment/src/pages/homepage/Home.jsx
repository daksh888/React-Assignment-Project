import { Link, useNavigate } from 'react-router-dom';
import "./HomeStyle.scss";

const Home = ({ data }) => {
  const navigate = useNavigate();

  const handleGetSummary = (id) => {
   
    navigate(`/summary/${id}`);
  };

  return (
    <>
      <div className="container">
        {data.map((item) => (
          <div className="item-container" key={item.show.id}>
            <h2>Movie Name: {item.show.name}</h2>
            <p>Movie Score: {item.score}</p>
            <p>Movie Type: {item.show.type}</p>
            <p>Movie Average: {item.show.rating.average}</p>
            <p>Movie Language: {item.show.language}</p>
            <p>Movie Status: {item.show.status}</p>
            <button onClick={() => handleGetSummary(item.show.id)}>
              Get Summary
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
