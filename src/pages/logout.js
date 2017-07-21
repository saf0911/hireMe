import React from 'react';
import Header from '../components/Header';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';

function LogOut() {
  return (
    <div>
      <Header />
      <marquee>
        Come back soon
      </marquee>
      <h1>
        You are logged out
      </h1>
    </div>
  );
}


export default withRedux(initStore, null, null)(LogOut);
