import React, {  useState } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';
import { toast } from 'react-toastify';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate()

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('login', true);
      navigate("/home")
      console.log('Signin successful!');
    } catch (error) {
      toast.error('User id or Password not match!!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error('Error during signin:', error.message);
    }
  };

  return (
    <section className="section">
      <div className="login-box">
        <form onSubmit={handleSignIn}>
          <h2>Sign In</h2>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="">Password</label>
          </div>

          <div className="remember-forget">
            <label htmlFor="">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forget">Forgot Password</Link>
          </div>

          <button type="submit">Sign In</button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
