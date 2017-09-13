import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';





function IndexPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='home'>
        <img className='frontPagePic' src='/static/img/myPic.jpg' alt='no pics today' />
        <div className='frontPageText'>
          <h1> Scott Foster </h1>
          <h3> Junior Web Developer </h3>
          <h5> HTML CSS JAVASCRIPT REACT REDUX NEXT</h5>
          <marquee>

            <img src='/static/img/SF1.jpg' alt='Scott Foster Logo' />
          </marquee>
        </div>

      </div>

        <style jsx>{`

          .home {
            list-style-type: none;
            text-decoration: none;
            margin: 0;
            padding: 0em;
            background-color: white;
            display: grid;
            grid-template-columns: 2fr 2fr ;
            grid-template-rows: 2fr;
            grid-template-areas:
              'pic pic'
              'text text';
            grid-gap: 5px 10px;
            justify-content: flex-start;
            }

          .frontPagePic {
            grid-area: pic;
            width: 100%;
            display: inline;
          }

          .frontPageText {
            grid-area: text;
            display: inline;
            text-align: center;
          }
      `}</style>

    </div>
  );
}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(IndexPage);
