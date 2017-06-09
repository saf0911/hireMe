import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import UserComponent from '../components/UserComponent';

function AboutPage() {
  return (
    <div>
      <Header />
      <h1>
        About page
      </h1>
      <UserComponent />
    </div>
  );
}

export default AboutPage;
