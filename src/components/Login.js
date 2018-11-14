import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}

  async login() {
    if(!this.state.email || this.state.password) return alert('Please fill out Email & password')
    let result = await axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }) 

    console.log(result)
    if (result.data.message === 'loggedIn') {
      this.props.history.push('/Dashboard')
    }
  }

  async signup() {
    if(!this.state.email || this.state.password) return alert('Please fill out Email & password')
    let result = await axios.post('/auth/signup', {
      email: this.state.email,
      password: this.state.password
    })

    console.log(result)
    if (result.data.message === 'loggedIn') {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <div className="Login">
          <h1>Helo</h1>
          <form>
            <p>
              Email:
              <input name="email" type="email" onChange={this.handleChange}/>
            </p>
            <p>
              Password:
              <input name="password" type="password" onChange={this.handleChange}/>
            </p>
            <button>Login</button>
            <button>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
