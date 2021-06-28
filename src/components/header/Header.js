import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {Row, Col, Button} from 'antd';
import {MenuFoldOutlined} from '@ant-design/icons';

import './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    handleVisibleChange = () => {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const links = [
            { key: "/", text: 'Trang chủ' },
            { key: "/code", text: 'Code dạo' },
            { key: "/computer", text: 'Máy tính' },
            { key: "/timeline", text: 'Thời gian' },
            { key: "/about", text: 'Giới thiệu' },
        ];
        return (
            <div className="header-wrapper">
                <div className="container">
                    <div className="site-logo">
                        <h2>
                            <span>Cường</span><span>IT</span>
                        </h2>
                        <p>Công nghệ 36</p>
                    </div>
                    <div className="navbar-collapse">
                        <Col xs={24} sm={0}>
                            <div className="navbar-collapse-button">
                                <Button icon={<MenuFoldOutlined />}  onClick={this.handleVisibleChange}>  </Button>
                                {/*<Icon type={this.state.visible ? 'menu-unfold' : 'menu-fold'} onClick={this.handleVisibleChange} />*/}
                            </div>
                            <div className="navbar-collapse-body" style={{ height: this.state.visible ? 280 : 0 }}>
                                <Col sm={0}>
                                    <div onClick={this.onClick}>
                                        {
                                            links.map((item) => (
                                                <p className="navbar-item" key={item.key}>
                                                    <Link to={item.key} data-key={item.key} onClick={this.handleVisibleChange}>{item.text}</Link>
                                                </p>
                                            ))
                                        }
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </div>
                </div>
                <Row>
                    <Col xs={0} sm={24}>
                        <div className="nav-top">
                            <div className="container">
                                <ul onClick={this.onClick}>
                                    <li className="nav-top-item">
                                        <Link to="/" data-key="/">Trang chủ</Link>
                                        <Link to="/code" data-key="/code">Code dạo</Link>
                                        <Link to="/computer" data-key="/computer">Máy tính</Link>
                                        <Link to="/timeline" data-key="/timeline">Thời gian</Link>
                                        <Link to="/about" data-key="/about">Giới thiệu</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;