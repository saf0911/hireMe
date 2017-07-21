import React from 'react';
import Header from '../components/Header';
import ListOfUsers from '../components/ListOfUsers';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';




function AboutPage() {
<<<<<<< HEAD

=======
  
>>>>>>> 3928d3adb936ecb39b6dafb0d91617314806868a
  return (
    <div>
      <Header />
      <h1>
        About page
      </h1>
      <ListOfUsers />
    </div>
  );
}

export default withRedux(initStore, null, null)(AboutPage);
