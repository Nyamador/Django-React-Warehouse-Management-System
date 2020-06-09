import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  
  useEffect(() => {
    setToken(localStorage.getItem('access_token'))
  }, [token])

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ username: `${email}`, password: `${password}` });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    try {
      const response = fetch(
        'http://localhost:8000/api-token-auth/',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          const token = JSON.stringify(result.token);
          localStorage.setItem('access_token', token);
          setToken(result.token);
        })
        .catch((error) => console.log('error', error));
      // axiosInstance.defaults.headers["Authorization"] = "Token " + response.data.access;
      // console.log(response)
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return token ? (
    <Redirect to='/' />
  ) : (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-5 col-xl-4 my-5'>
          <h1>Sign In</h1>

          <form className='login' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label for='id_login'>E-mail</label>
              <input
                type='email'
                name='login'
                placeholder='E-mail address'
                autofocus='autofocus'
                className='form-control'
                required=''
                value={email}
                id='id_login'
                onChange={handleEmailChange}
              />
              <div className='invalid-feedback'></div>
            </div>
            <div className='form-group'>
              <div className='row'>
                <div className='col'>
                  <label for='id_password'>Password</label>
                </div>
                <div className='col-auto'>
                  <a
                    href='/accounts/password/reset/'
                    className='form-text small text-muted'
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className='input-group input-group-merge'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='form-control form-control-appended'
                  required=''
                  value={password}
                  id='id_password'
                  onChange={handlePasswordChange}
                />
                <div className='input-group-append'>
                  <span className='input-group-text'>
                    <i className='fe fe-eye'></i>
                  </span>
                </div>
              </div>
            </div>

            <button
              className='primaryAction btn btn-lg btn-block btn-primary mb-3'
              type='submit'
            >
              Sign In
            </button>
            <div className='text-center'>
              <small className='text-muted text-center'>
                Don"t have an account yet?{' '}
                <a href='/accounts/signup/?next=%2F'>Sign up </a>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
