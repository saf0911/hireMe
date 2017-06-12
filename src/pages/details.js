import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';

function Details(props) {
  //const user = props.user;
  const userId = props.url.query.id;
  return (
    <div>
        <Header />
      <h1>
        Details
      </h1>
      <ul>
        <li> {user.firstName} </li>
        <li> {user.lastName} </li>
        <li> {user.avatar} </li>
        <li> {user.interests} </li>
        <li> {user.username} </li>
      </ul>
    </div>
  );
}

Details.propTypes = {
  user: PropTypes.array.isRequired,
};


export default Details;
