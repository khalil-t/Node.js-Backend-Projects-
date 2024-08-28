import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const jsonObject = {
    unix: 1451001600000,
    utc: "Fri, 25 Dec 2015 00:00:00 GMT"
  };
  
  // Convert JSON object to string
  const jsonString = JSON.stringify(jsonObject);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="App">
      <h1>Timestamp Microservice
      </h1>
      <hr></hr>
      <header className="App-header">
        <div>
          <h1>Example Usage:</h1>
          <a href={`${process.env.REACT_APP_API_DATA}/`} className='a'>
          <ul className='ul'>
            <li className='li'>[project url]/api/2015-12-25</li>
            <li className='li'>[project url]/api/1451001600000</li>

          </ul>
          
          
          
          </a>
          </div> 
        <div>
          <h1>Example Output:</h1>
          <ul>
           
{jsonString}

          </ul>
         
        </div> 
      </header>
    </div>
  );
}

export default App;


