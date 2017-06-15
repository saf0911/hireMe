import React, {Component} from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
// import {loadUsers} from '../actions';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import { getUserId } from '../actions';



class Details extends Component {
  constructor(props) {
    super(props);

    console.log('is this thing even on');
  }

  componentDidMount() {
    this.props.getUserId(this.props.url.query.id);
    console.log(this.props.url.query.id, 'checking');
  }


  render() {
    const { user } = this.props;
    // const userId = this.props.url.query.id;
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
}



Details.propTypes = {
  user: PropTypes.object.isRequired,
  loadUsers: PropTypes.func,
  getUserId: PropTypes.func,
  url: PropTypes.object,
  query: PropTypes.array,
  id: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  console.log('why why why', dispatch);
  return {
    getUserId: id => {
      dispatch(getUserId(id));
    }
  };
}

function mapStateToProps(state) {
  console.log('Map state to props', state);
  return {
    users: state.users,
    user: state.user
  };
}


export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Details);
