import React, { Component } from 'react';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      password_confirmation: '',
      errors: '',
      loggedIn: false
     };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {login, password, password_confirmation} = this.state
    let user = {
      login: login,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:3000/railsapp/users', {user}, {withCredentials: true})
        .then(response => {
          if (response.data.status === 'created') {
            this.redirect()
          } else {
            this.setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.setState({
      loggedIn: true
    });
  }

  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li>key={error}>{error}</li>
        })}
        </ul>
      </div>
    )
  }

  render() {
    const {login, password, password_confirmation, loggedIn} = this.state
    if (loggedIn) {
      console.log('logged in from login form');
      return <Redirect to="/"/>;
    }
    return (
      <section className="section">
        <div className="content">
          <h1 className="page-title">Добро пожаловать в LMS</h1>
            <form onSubmit={this.handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              width: '360px',
              alignItems: 'center',
              margin: 'auto'
            }}>
              <div style={{
                width: '100%'
              }}>
                <p style={{
                  textAlign: 'left',
                  fontSize: '20px',
                  lineHeight: '16px',
                  color: '#000',
                  marginBottom: '12px',
                  fontWeight: 'bold'
                }}>Зарегистрироваться</p>
              </div>
              <div style={{
                width: '100%'
              }}>
                <p style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  lineHeight: '16px',
                  color: '#8E8E93',
                  marginBottom: '12px'
                }}>Логин</p>
              </div>
              <input
                type="text"
                name="login"
                value={login}
                onChange={this.handleChange}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #8E8E93',
                  height: '40px',
                  width: '100%',
                  borderRadius: '8px',
                  fontSize: '12px',
                  textIndent: '20px'
                }}
              />
              <div style={{
                width: '100%'
              }}>
                <p style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  lineHeight: '16px',
                  color: '#8E8E93',
                  marginBottom: '12px'
                }}>Пароль</p>
              </div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #8E8E93',
                  height: '40px',
                  width: '100%',
                  borderRadius: '8px',
                  fontSize: '12px',
                  textIndent: '20px'
                }}
              />
              <div style={{
                width: '100%'
              }}>
                <p style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  lineHeight: '16px',
                  color: '#8E8E93',
                  marginBottom: '12px'
                }}>Подтверждение</p>
              </div>
              <input
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this.handleChange}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #8E8E93',
                  height: '40px',
                  width: '100%',
                  borderRadius: '8px',
                  fontSize: '12px',
                  textIndent: '20px'
                }}
              />

              <button placeholder="submit" type="submit" className="square_btn" style={{
                width: '101%',
                marginTop: '27px',
                fontSize: '12px',
                border: 'none'
              }}>
                Создать
              </button>

            </form>
          </div>
        </section>
    );
  }
}
export default Signup;
