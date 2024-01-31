import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/homepage/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Summary from './pages/summarypage/Summary';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home data={data} />} />
          <Route path="/summary/:id" element={<Summary data={data} />} />
          

         
      
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
