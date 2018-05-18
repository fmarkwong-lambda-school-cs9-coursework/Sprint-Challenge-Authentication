import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state)
      .then(token => {
        localStorage.token = token.data.token;
        console.log('token is', token.data.token);

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card card-container">
        <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <p id="profile-name" className="profile-name-card"></p>
        <form className="form-signin" onSubmit={this.submitHandler} >
          <span id="reauth-email" className="reauth-email"></span>
          <input name="username" value={this.state.username} onChange={this.inputHandler} className="form-control" placeholder="User Name" required autoFocus />
          <input name="password" value={this.state.password} onChange={this.inputHandler}  type="password"  className="form-control" placeholder="Password" required />
          <div id="remember" className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
        </form>
        <a href="#" className="forgot-password">
          Forgot the password?
        </a>
      </div>
    );
  }
}
