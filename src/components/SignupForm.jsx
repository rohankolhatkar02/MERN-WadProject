import React, { useState } from 'react';

const SignupF = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    setUsernameError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!username.trim()) {
      setUsernameError('Please enter a username.');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('Please enter a password.');
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Please confirm your password.');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      const data = { username, password };
      try {
        const response = await fetch('http://localhost:3001/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Error signing up');
        }

        const responseBody = await response.json();
        console.log('Responsebody:', responseBody);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {usernameError && <div className="error">{usernameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {confirmPasswordError && (
            <div className="error">{confirmPasswordError}</div>
          )}
        </div>
        <button type="submit" className="btn-signup">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupF;
