import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/Link';
import {loadUsers} from '../actions';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <div>
        {this.props.users.map((user, key) => {
          return (
            <div key={key} >
              <ul>
                <li> {user.firstName} </li>
                <li> {user.lastName} </li>
                <li> {user.username} </li>
                <li> {user.avatar} </li>
                <a href={`/details?id=${user._id}`} >View User</a>
                <button onClick={() => this.props.onUserDelete(user._id)} >Delete User</button>
              </ul>

            </div>

          );
        })}
      </div>
    );
  }
}


ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  userSelect: PropTypes.func.isRequired,
  onUserDelete: PropTypes.func,
  loadUsers: PropTypes.func,
};




function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}



export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ListOfUsers);
