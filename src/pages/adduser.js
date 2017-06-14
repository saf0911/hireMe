import React, {Component} from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import {
  createUser,
  loadUsers,
} from '../actions';
import PropTypes from 'prop-types';

const FORM_VALUES = {
  firstName: '',
  lastName: '',
  avatar: '',
  interests: '',
  username: '',
};

class AddUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = FORM_VALUES;

  }

  componentDidMount() {
    this.props.loadUsers();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }




  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state
    );

    this.setState(FORM_VALUES);
  }


  render() {
    return (
      <div>
        <Header />
        <h1>
          Create a profile
        </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>

          First name:<br />
            <input
              type='text'
              name='firstName'
              placeholder='Add First name'
              value={this.state.firstName}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />
          Last name:<br />
            <input
              type='text'
              name='lastName'
              placeholder='Add Last name'
              value={this.state.lastName}
              onChange={this.handleInputChange.bind(this)}
             />
            <br />
          Avatar: <br />
            <input
              type="text"
              name="avatar"
              placeholder="Add Avatar"
              value={this.state.avatar}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />
          Interests: <br />
            <input
              type='text'
              name='interests'
              placeholder='Add Interests'
              value={this.state.interests}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />
            User Name:<br />
              <input
                type='text'
                name='username'
                placeholder='Add Last name'
                value={this.state.username}
                onChange={this.handleInputChange.bind(this)}
               />
            <br /><br />
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => {
      dispatch(createUser(values));
    },
    onMount: () => {
      dispatch(loadUsers());
    }
  };
}


AddUserPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired
};

// null will be mapstatetoprops and mapdispatchtoprops
export default withRedux(initStore, null, mapDispatchToProps)(AddUserPage);
