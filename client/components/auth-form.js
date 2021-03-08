import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return(
      <div className='row'>
        <form
          className='col s6'
          onSubmit={ this.onSubmit.bind(this) }
        >

          <div className='input-field'>
            <input
              onChange={ (e) => this.setState({ email: e.target.value }) }
              placeholder='email'
              value={ this.state.email }
            />
          </div>

          <div className='input-field'>
            <input
              onChange={ (e) => this.setState({ password: e.target.value }) }
              placeholder='password'
              type='password'
              value={ this.state.password }
            />
          </div>

          <div className='errors'>
            { this.props.errors.map(err => <div key={ err }>{err}</div>) }
          </div>

          <button className='btn'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
