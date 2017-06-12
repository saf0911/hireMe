import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import ListOfUsers from '../components/ListOfUsers';




function AboutPage() {
  const users = [ {
    firstName: 'Scott',
    lastName: 'Foster',
    address: '3310 Stardust Dr',
    occupation: 'Smooth Operator',
    phone: '7739108803',
    avatar: 'cat pic',
    username: 'saf09411',
    password: 'Password123'
  } ];
  return (
    <div>
      <Header />
      <h1>
        About page
      </h1>
      <ListOfUsers users={users}/>
    </div>
  );
}

export default AboutPage;
