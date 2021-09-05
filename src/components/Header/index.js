import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { Layout, Icon, Menu } from 'antd';

import { makeSelectUser } from 'global.selectors';
import '../index.css';
import Sider from 'components/Sider';
import './Header.scss'

function Header(props) {
  return (
    <div className="header-wrapper">
      {/* <div className="site-logo" >
        <h2>
          <span>Cường</span><span>IT</span>
        </h2>
        <p>Công nghệ 36</p>
      </div> */}

      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '48px', lineHeight: '48px', padding: '0 30px' }}>
        <div className="container">

          <Link to="/">
            <span style={{ float: 'left', marginRight: 10, lineHeight: '48px', fontWeight: 'bold', fontSize: 'medium' }}>
              <Icon type="layout" /> Blog Công nghệ
            </span>
          </Link>
          {/* <span level={4} style={{ lineHeight: '48px', float: 'right', color: 'rgba(255, 255, 255, 0.65)' }}>
        <Icon type="user" /> {JSON.stringify(props.user)}
      </span> */}
          {/* <div className="logo" /> */}
          <Sider />
        </div>
      </Layout.Header>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
