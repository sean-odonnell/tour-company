import axios from 'axios';
import { browserHistory } from 'react-router';

export function findSession() {
  return dispatch => (
    axios.get('/api/user/session')
      .then(resp => {
        console.log('hi this is session', resp);
        dispatch(findSessionCalled());

        if (resp.data.length > 0) 
          dispatch(assignUser(resp.data[0]));
      })
  );
}

export function findSessionCalled() {
  return {
    type: 'FIND_SESSION_CALLED',
    payload: true
  };
}

export function getUserInfo(user) {
  return dispatch => (
    axios.get('/api/users/' + user.username).then(resp => {
      dispatch(assignUser(user));
      dispatch(clearAuthInput());
      browserHistory.push('/Users/' + user.username);
    })
  );
}

export function submitLoginUser(user) {
  return dispatch => {
    if (user.username !== '' && user.password !== '') {
      axios.post('/auth/login', user).then(resp => {
        if (resp.status === 200) {
          dispatch(getUserInfo(user));
        }
      }).catch(err => {
        dispatch(assignLoginError(err));
      });
    };
  }
}

export function submitLogout() {
  return dispatch => (
    axios.get('/auth/logout').then((response) => {
      dispatch(logoutUser());
      browserHistory.push('/');
    }).catch(err => {
      dispatch(logoutError());
    })
  );
}

export function submitSignupUser(user) {
  return dispatch => {
    if (user.username !== '' && user.password !== '') {
      axios.post('/auth/signup', user).then(resp => {
        if (resp.status === 201) {
          dispatch(assignUser(user));
          dispatch(clearAuthInput());
          browserHistory.push('/Users/' + user.username);
        }
      }).catch(err => {
        dispatch(assignLoginError());
      });
    }
  };
}


export function assignUser(user) {
  return {
    type: "LOGIN_SUCCESSFUL",
    user: user
  };
}

export function assignLoginError(err) {
  return {
    type: "LOGIN_ERROR",
    err: err
  };
}

export function logoutUser() {
  return {
    type: 'LOGOUT_SUCCESSFUL'
  };
}

export function logoutError(err) {
  return {
    type: "LOGOUT_ERROR",
    err: err
  };
}

export function clearAuthInput() {
  return {
    type: "CLEAR_AUTH_INPUT",
  }
}

export function setAuthInput(item, value) {
  var toReturn = {
    type: 'SET_AUTH_INPUT_' + item.toUpperCase(),
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}

