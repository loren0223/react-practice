import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState((state) => ({ isLoggedIn: true }));
  }

  handleLogoutClick() {
    this.setState((state) => ({ isLoggedIn: false }));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

export default LoginControl;
