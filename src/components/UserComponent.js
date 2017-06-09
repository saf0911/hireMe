import React from 'react';
import User from '../models/Users';
import PropTypes from 'prop-types';

function ListOfUsers(props) {
  return (
    <div>
      {props.users.map((users, key) => {
        return (
          <User
            users={users}
            key={key}
            userSelect={() => {
              props.usersSelect(users);
            }}
      />

        );
      })}
    </div>
  );
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  userSelect: PropTypes.func.isRequired
};

export default ListOfUsers;
