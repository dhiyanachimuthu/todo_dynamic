import React, { useState } from 'react';

 function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    onSignup(username); // sets user for session
  };

  return (
    <div>
    <div className="signup">
      <form onSubmit={handleSignup}>
        <h2>📝Welcome to TaskBuddy!</h2>
        <p className="signup-text">
          Create your free account to start managing your tasks and boost your productivity.
        </p>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        <p className="signup-footer">
          By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </form>
    </div>
    </div>
  );
}
export default Signup
