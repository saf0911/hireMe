import React, {Component} from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

class adduserPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>
          Create a profile
        </h1>
        <form>

          First name:<br />
            <input type='text' name='firstName' placeholder='Add First name' />
            <br />
          Last name:<br />
            <input type='text' name='lastName' placeholder='Add Last name' />
            <br />
          Avatar: <br />
            <input type="text" name="avatar" placeholder="Add Avatar" />
            <br />
          Interests: <br />
            <input type='text' name='intersets' placeholder='Add Interests' />
            <br /><br />


          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }

}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(adduserPage);
