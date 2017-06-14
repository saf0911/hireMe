function loadUserError(message) {
  return {
    type: 'USER_LOAD_ERROR',
    message
  };
}

export function loadUsers() {
  return function (dispatch) {
    fetch('/users')
    .then(response => {
      return response.json();
    }).then(users => {
      dispatch(usersLoaded(users))
        .catch(err => {
          dispatch(loadUserError(), err);
        });
    });
  };
}

function usersLoaded(users) {
  return {
    type: 'USERS_LOADED',
    value: users
  };
}

function createUserError(message) {
  return {
    type: 'USER_CREATE_ERROR',
    message
  };
}

export function createUser(v) {
  return function (dispatch) {
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(v)
    })
      .then(() => dispatch(userCreated()))
        .catch(err => {
          dispatch(createUserError(), err);
        });
  };
}

function userCreated(user) {
  return {
    type: 'USERS_CREATED',
    value: user
  };
}


function deleteUserError(message) {
  return {
    type: 'USER_DELETE_ERROR',
    message
  };
}

export function deleteUser(r) {
  return function (dispatch) {
    fetch('/users', {
      method: 'Delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(r)
    })
      .then(() => dispatch(userDeleted))
        .catch(err => {
          dispatch(deleteUserError(), err);
        });
  };
}

function userDeleted(user) {
  return {
    type: 'USERS_DELETED',
    value: user
  };
}
