// Imports
import React, { useState, useEffect } from 'react';

// Define TypeScript interfaces for strong typing
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface TableProps {
  users: User[];
}

// Table component to display the data
const Table: React.FC<TableProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Main App component that fetches data and manages state
const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Function to fetch data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: User[] = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <h1>User Table</h1>
      <Table users={users} />
    </div>
  );
};

export default App;
