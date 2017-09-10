import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import Link from 'next/link';




function IndexPage() {
  return (
    <div className='home'>

        <Header />
        <h1>
          Hello World
        </h1>
        <img className='frontPagePic' src='/static/img/myPic.jpg' alt='no pics today' />
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
        <br />
        <Link href="/adduser">
          <a>Sign Up</a>
        </Link>


        <style jsx>{`
          .frontPagePic {
            width: 50px;
      }



      `}</style>

    </div>
  );
}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(IndexPage);
