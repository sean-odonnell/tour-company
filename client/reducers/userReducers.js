var userDefaults = {
  username: '',
  findSessionCalled: false
};

export function authFormInputReducer(state = userDefaults, action) {
  switch(action.type) {
    case "SET_AUTH_INPUT_USERNAME":
      return {
        ...state,
        username: action.username
      };
    case "SET_AUTH_INPUT_PASSWORD":
      return {
        ...state,
        password: action.password
      };
    case "CLEAR_AUTH_INPUT":
      return userDefaults;
    default:
      return state;
  }
}

export function userAuthReducer(state = userDefaults, action) {
  switch(action.type) {
    case "FIND_SESSION_CALLED":
      return {
        ...state,
        findSessionCalled: action.payload
      }
    case "LOGIN_SUCCESSFUL":
      return {
        ...state,
        username: action.user.username
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: action.err
      };
    case 'LOGOUT_SUCCESSFUL':
      return userDefaults;
    case 'LOGOUT_ERROR':
      return {
        ...state,
        logoutError: action.err
      };
    default:
      return state;
  }
}
