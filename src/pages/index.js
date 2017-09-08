import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import Link from 'next/link';



function IndexPage() {
  return (
    <div>
      <Header />
      <h1>
        Hello World
      </h1>
      
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
      <br />
      <Link href="/adduser">
        <a>Sign Up</a>
      </Link>
    </div>
  );
}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(IndexPage);
