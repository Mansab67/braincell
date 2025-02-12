import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error in fetching', error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search the name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="user-list">
          {filteredUsers.map((e) => (
            <li key={e.id} className="user">
              <strong>{e.name}</strong>
              <p>{e.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;