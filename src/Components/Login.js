import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser } from '../store/Actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      dispatch(setUser(user));
      history.push('/tasks');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
      <button onClick={handleRegister} className="register-button">Register</button>
    </div>
  );
}

export default Login;