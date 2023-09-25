import pic1 from "./pic1.avif";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.avif";
import pic4 from "./pic4.avif";
import './App.css';
import React, { useState } from 'react';



function UserProfile({ user }) {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="user-profile">
      <img src={user.profilePicture} alt={`${user.name}'s Profile`} />
      <h2>{user.name}</h2>
      <button onClick={toggleEmail}>Email</button>
      {showEmail && <p>Email: {user.email}</p>}
    </div>
  );
}

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
}

function App() {
  const usersData = [
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      profilePicture: pic1,
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      profilePicture: pic2,
    },

    {
      name: 'Joshua',
      email: 'joshua@example.com',
      profilePicture: pic3,
    },

    {
      name: 'Imran',
      email: 'imran@example.com',
      profilePicture:pic4,
    }
    // Add more user data as needed
  ];
  return (
    <div className="App">
      <h1>User Profiles</h1>
      <UserList users={usersData} />
    </div>
  );
}

export default App;
