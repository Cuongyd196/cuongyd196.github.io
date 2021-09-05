import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link, withRouter, matchPath } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

import { URL } from '../constants/URL';
import constantsRoutes from '../routes/mainRoutes';

class BreadcrumbComponent extends Component {
  getBreadcrumbName(data) {
    return data.breadcrumbName ? data.breadcrumbName : (data.name || '');
  }

  render() {
    let { pathname } = this.props.location;
    const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
    const url = `/${pathSnippets[0]}`;
    return (
      <Breadcrumb className='my-2'>
        <Breadcrumb.Item>
          <Link to={URL.HOMEPAGE}><HomeOutlined /><span style={{ marginLeft: '4px' }}>Trang chủ</span></Link>
        </Breadcrumb.Item>
        {constantsRoutes.map((route, routeIndex) => {
          if (!route.children) {
            if (url !== URL.HOMEPAGE && route.path === url) {
              return <Breadcrumb.Item key={routeIndex}>
                <Link to={url}>
                  <span style={{ marginLeft: '4px' }}>
                    {this.getBreadcrumbName(route)}
                  </span>
                </Link>
              </Breadcrumb.Item>;
            }
          }
          // if (Array.isArray(route.children)) {
          //   return route.children.map((child, childIndex) => {
          //     if (pathname !== URL.HOMEPAGE && child.path === pathname) {
          //       return (
          //         <React.Fragment key={childIndex}>
          //           <Breadcrumb.Item>{this.getBreadcrumbName(route)}</Breadcrumb.Item>
          //           <Breadcrumb.Item>{this.getBreadcrumbName(child)}</Breadcrumb.Item>
          //         </React.Fragment>
          //       );
          //     }
          //   });
          // }
        })}
      </Breadcrumb>
    );
  }
}

export default withRouter(BreadcrumbComponent);
