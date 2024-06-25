import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null);

  const { loggedInUser } = useAuth();
  const token = loggedInUser.token;

  useEffect(() => {
    if (!token) {
      return;
    }

    axios
      .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFriends(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, [token]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {error && <p>{error}</p>}
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
