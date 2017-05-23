import React from 'react'
import NavLink from './NavLink'
import FormComponent from './formComponent'
import SubmitButton from './SubmitButton'
import { setAuthInput, submitLoginUser } from '../actions/userActions'
import { handleItemChange, isLoggedIn } from '../helpers/changeHandlers'

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemChange = handleItemChange.bind(null, setAuthInput);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    isLoggedIn(this.props.user);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitLoginUser(this.props.authFormInput));    
  }

  render() {
    return (
      <div className="container">
      <div id="signin-form">
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space" />
        <div className="space" />

        <h1 className="text-center">
          Welcome back! Log in to your account:
        </h1>
        <div className="space" />

        <div className="form-group">
          <FormComponent name='username' value={this.props.authFormInput.username} onChange={this.handleItemChange} />
          <FormComponent name='password' value={this.props.authFormInput.password} onChange={this.handleItemChange} />
        </div>

        <SubmitButton />
      </form>
      </div>
      </div>
    );
  }
}
