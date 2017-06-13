import React from 'react';
import Header from '../components/Header';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';



function SignIn() {
  return (
    <div>
      <Header />
      <h1>
        Sign In
      </h1>
      <form>
        Username <input type='text' name='username'></input><br/>
        Password <input type='text' name='password'></input><br/>
        <input type='submit' value='submit'></input>
      </form>
    </div>
  );
}

export default withRedux(initStore, null, null)(SignIn);
