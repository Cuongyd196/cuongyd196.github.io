import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Layout } from 'antd';
import NavSide from '../src/components/nav-side/NavSide';
import { BackTop, Row, Col } from "antd";
import Header from 'components/Header';
import Sider from 'components/Sider';
import PrivateRoute from 'components/PrivateRoute';
import mainRoutes from 'routes/mainRoutes';
import Footer from 'components/footer/Footer';
import BreadcrumbComponent from 'components/BreadcrumbComponent';

const { Content } = Layout;
export default function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet
        titleTemplate="Blog Cường IT"
        defaultTitle="Blog Cường IT"
      >
        <meta name="description" content="Blog Cường IT" />
      </Helmet>
      <Header />
      <div className="container content-wrap">
        <Row gutter={24}>
          <Col xs={24} sm={24} md={17} lg={17} xl={17} xxl={17} >
            <Content style={{ padding: '0 20px', marginTop: 64 }}>
              <Switch>{mainRoutes.map((route, i) =>
              (route.auth ?
                <PrivateRoute {...route} key={i} />
                :
                <Route {...route} key={i} />))
              }
              </Switch>
            </Content>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7} >
            <NavSide />
          </Col>
        </Row>
      </div>
      <Footer />
      <BackTop />
    </Layout>
  );
}


