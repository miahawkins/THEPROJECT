import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import Nav from "../Nav";
import Footer from "../Footer";
import Input from "../Input";

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />

  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
        <Nav />
          <form onSubmit={this.onSubmit}>
            
            <Input
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email Address"
            />
            <Input
              value={password}
              onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
              type="password"
              placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">
              Sign In
            </button>

            <br/><br/>

            { error && <p>{error.message}</p> }
            <PasswordForgetLink />
            <SignUpLink />
          </form>
        <Footer />
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
