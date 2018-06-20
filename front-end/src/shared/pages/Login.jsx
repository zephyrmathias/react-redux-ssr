import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'my name',
    };
  }
  render() {
    return (
      <div>
        <div>Login</div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default Login;
