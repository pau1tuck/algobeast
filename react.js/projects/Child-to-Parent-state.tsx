import React, { useState, ChangeEvent, FormEvent } } from 'react';
import ChildForm from './ChildForm';

interface UserData {
  name: string;
  email: string;
}
export const ParentComponent = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  // Callback function to receive data from child
  const handleUserData = (data: UserData) => {
    setUserData(data);
  };
  return (
    <div>
      <h1>User Details</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>No user data submitted.</p>
      )}
      <ChildForm onSubmit={handleUserData} />
    </div>
  );
};
interface UserData {
  name: string;
  email: string;
}
interface ChildFormProps {
  onSubmit: (data: UserData) => void;
}
export const ChildForm = ({ onSubmit }): ChildFormProps => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email });
    // Clear the form
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};