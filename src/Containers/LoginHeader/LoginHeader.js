import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../../Containers/Header/Header';
import './LoginHeader.css';
import Button from '../../Components/common/button';

class LoginHeader extends Component {
  goTo = (link) => {
    const { history } = this.props;
    history.push(`/${link}`, null);
  };

  render() {
    return (
      <Header>
        <div className="user__buttons">
          <Button
            className="user__button sign-up"
            onClick={() => this.goTo('signup')}
          >
            Sign-Up
          </Button>
          <Button
            className="user__button sign-in"
            onClick={() => this.goTo('signin')}
          >
            Sign-In
          </Button>
        </div>
      </Header>
    );
  }
}

export default withRouter(LoginHeader);
