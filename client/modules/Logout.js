import React from 'react'
import { submitLogout } from '../actions/userActions'
import { isLoggedOut } from '../helpers/changeHandlers'

export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillReceiveProps() {
    isLoggedOut(this.props.user);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.dispatch(submitLogout());
  }

  render() {
    return (
      <div className="container">
      <div id="signin-form">
      <div className="text-center logout">
        <h1>Are you sure you want to log out?</h1>

        {
          this.props.user.logoutError ? 
            <h3>There has been an error while attempting to log out. Please try again later</h3> : 
            JSON.stringify(this.props.user.logoutError)
        }
        <button type="button" 
          className="btn btn-primary" 
          onClick={this.handleLogout}>
            Log Out 
        </button>
      </div>
      </div>
      </div>
    );
  }
}
