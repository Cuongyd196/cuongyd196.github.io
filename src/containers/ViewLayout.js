/**
 * @author LiuNing
 * @since 2019-04-07
 * @description Layout
 */
import React, { Component, Fragment } from 'react';
import { BackTop, Row, Col } from "antd";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavSide from '../components/nav-side/NavSide';

class ViewLayout extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container content-wrap">
                    <Row gutter={24}>
                        <Col xs={24} sm={18}>
                            {this.props.children}
                        </Col>
                        <Col xs={24} sm={6}>
                            <NavSide />
                        </Col>
                    </Row>
                </div>
                <Footer />
                <BackTop />
            </Fragment>
        )
    }
}

export default ViewLayout;