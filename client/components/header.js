import React from 'react';
import PropTypes from 'prop-types';
import { CURRENT_USER } from 'client/queries/user';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { LOGOUT } from 'client/mutations/user';

const Header = (props) => {
  const { data, loading, mutate } = props;

  const onLogoutClick = () => mutate({
    refetchQueries: [{ query: CURRENT_USER }]
  });

  const renderButtons = () => {
    if (loading)
      return <div />;

    if (data && data.user)
      return (
        <li>
          <a onClick={ onLogoutClick }>Logout</a>
        </li>
      );
    else
      return (
        <div>
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </div>
      );
  }

  return(
    <nav>
      <div className='nav-wrapper'>

        <Link className='brand-logo left' to='/'>Home</Link>

        <ul className='right'>
        { renderButtons() }
        </ul>

      </div>
    </nav>
  );
};

Header.propTypes = {
  props: PropTypes.func
}

export default graphql(LOGOUT)(
  graphql(CURRENT_USER)(Header)
);
