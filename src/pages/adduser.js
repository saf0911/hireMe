import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

function adduserPage() {
  return (
    <div>
      <Header />
      <h1>
        Create a profile
      </h1>
      <form>

        First name:<br />
          <input type='text' name='firstName' value='Add First name' />
          <br />
        Last name:<br />
          <input type='text' name='lastName' value='Add Last name' />
          <br />
        Avatar: <br />
          <input type="text" name="avatar" value="Add Avatar" />
        Interests: <br />
          <input type='text' name='intersets' value='Add Interests' />   
          <br /><br />


        <input type="submit" value="Submit" />

      </form>
    </div>
  );
}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(adduserPage);
