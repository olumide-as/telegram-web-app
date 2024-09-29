// frontend/src/Components/UserList.jsx

import React, { useEffect, useState } from "react";
import { fetchUsers } from "../Services/userService";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers(); // Fetch users from your backend
      setUsers(data); // Assuming data is an array of users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    loadUsers(); // Load users on component mount
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.telegramId}>
            {user.firstName} {user.lastName} (@{user.username})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
