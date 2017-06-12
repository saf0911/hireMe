import React from 'react';
import PropTypes from 'prop-types';

function ListOfUsers(props) {
  return (
    <div>
      {props.users.map((user, key) => {
        return (
          <div key={key} >
            <ul>
              <li> {user.firstName} </li>
              <li> {user.lastName} </li>
              <li> {user.username} </li>
              <a href={`/details?id=${user._id}`} >View User</a>
              <button onClick={() => props.onUserDelete(user._id)} >Delete User</button>
            </ul>

          </div>

        );
      })}
    </div>
  );
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  userSelect: PropTypes.func.isRequired,
  onUserDelete: PropTypes.func,

};

// Tells what the function takes for easier reading
ListOfUsers.defaultProps = {
  // eslint-disable-next-line
  onUserDelete: (userid) => {}
};

export default ListOfUsers;
