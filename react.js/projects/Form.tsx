// Imports
import React, { useState } from 'react';

// Define TypeScript interfaces for form state
interface FormState {
  name: string;
  email: string;
  password: string;
}
interface FormProps {
  onSubmit: (formState: FormState) => void; // Function to call on form submission
}
// Validator functions for the form fields
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isStrongPassword = (password: string) => password.length >= 8;

// The Form component
const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Reset specific field error
    setErrors(prev => ({ ...prev, [name]: '' }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let newErrors = {};
    // Validate email
    if (!isValidEmail(formState.email)) {
      newErrors = { ...newErrors, email: 'Invalid email format' };
    }
    // Validate password
    if (!isStrongPassword(formState.password)) {
      newErrors = { ...newErrors, password: 'Password must be at least 8 characters long' };
    }

    if (Object.keys(newErrors).length > 0) {
      // Set errors if validation fails
      setErrors(newErrors);
    } else {
      // Submit the form if no errors
      onSubmit(formState);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formState.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formState.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" value={formState.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
const App: React.FC = () => {
  const handleFormSubmit = (formData: FormState) => {
    console.log('Form Data Submitted:', formData);
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
