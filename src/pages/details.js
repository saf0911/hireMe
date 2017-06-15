// import React, {Component} from 'react';
// import Header from '../components/Header';
// import PropTypes from 'prop-types';
// // import {loadUsers} from '../actions';
// import withRedux from 'next-redux-wrapper';
// import {initStore} from '../store';
//
//
//
// class Details extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//
//   render() {
//     const user = props.user;
//     // const userId = props.url.query.id;
//     return (
//       <div>
//           <Header />
//         <h1>
//           Details
//         </h1>
//         <ul>
//           <li> {user.firstName} </li>
//           <li> {user.lastName} </li>
//           <li> {user.avatar} </li>
//           <li> {user.interests} </li>
//           <li> {user.username} </li>
//         </ul>
//       </div>
//     );
//   }
// }
//
//
//
// Details.propTypes = {
//   user: PropTypes.array.isRequired,
//   loadUsers: PropTypes.func,
// };
//
//
//
// export default withRedux(initStore, null, null)(Details);
