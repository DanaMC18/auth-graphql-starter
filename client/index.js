import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Router, Route } from 'react-router';

import App from 'client/components/app';
import Dashboard from 'client/components/dashboard';
import LoginForm from 'client/components/login-form';
import requireAuth from 'client/components/require-auth'; // HOC
import SignupForm from 'client/components/signup-form';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: { credentials: 'same-origin' }
});

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface
});

const Root = () => {
  return (
    <ApolloProvider client={ client }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/dashboard' component={ requireAuth(Dashboard) } />
          <Route path='/login' component={ LoginForm } />
          <Route path='/signup' component={ SignupForm } />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
