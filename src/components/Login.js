import React, { Component } from 'react';

class Login extends Component {
    render() {
      return (
        <div className="Login">
          <h1>Helo</h1>
          <form>
              <p>Email:<input name="email" type="email"/></p>
              <p>Password:<input name="password" type="password"/></p>
              <button>Login</button><button>Register</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;
  