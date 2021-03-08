import React, { Component } from 'react';
import AuthForm from './auth-form';
import { CURRENT_USER } from 'client/queries/user';
import { graphql } from 'react-apollo';
import { LOGIN } from 'client/mutations/user';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      refetchQueries: [{ query: CURRENT_USER }],
      variables: { email, password }
    })
    .catch(res => {
      const errors = res.graphQLErrors.map(err => err.message);
      this.setState({ errors });
    });
  };

  render() {
    return (
      <div className='container'>
        <h3>Login</h3>
        <AuthForm
          errors={ this.state.errors }
          onSubmit={ this.onSubmit.bind(this) }
        />
      </div>
    );
  }
};


export default graphql(LOGIN)(LoginForm);
