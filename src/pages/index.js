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
        <img className='frontPagePic' src='/static/img/compypic.jpeg' alt='no pics today' />
        <div className='frontPageText'>
          <h1>
            Scott Foster
          </h1>
          <h3>
            Junior Web Developer
          </h3>
          <h4>
            Computer stuff I know
          </h4>
          <h5>
            HTML, CSS, JavaScript, React, Redux
          </h5>
          <h5>
            Next, Node, MongoDB, Mongoose
          </h5>
          <h5>
            Express, Atom, VS Code
          </h5>
          <h4>
            Things I do for fun
          </h4>
          <h5>
            Cooking, Eating, Photography
          </h5>



        </div>

      </div>

        <style jsx>{`


          h1 {
            font-size: 36px;
            font-family: ebgaramond;

          }

          h5 {
            margin-left: 10px;
          }

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
              'pic text'

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
            text-align: left;
            margin-left: 8em;
            margin-top: 10em;
          }
      `}</style>

    </div>
  );
}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(IndexPage);
