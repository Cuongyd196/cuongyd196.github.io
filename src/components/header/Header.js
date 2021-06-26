/**
 * @author LiuNing
 * @since 2019-04-08
 * @description 头部Header
 * 使用antd Row Col的xs sm响应式栅格布局实现移动端适配
 */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {Row, Col, Button} from 'antd';
import { FastBackwardOutlined , SaveOutlined , MenuFoldOutlined} from '@ant-design/icons';

import './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false, //小屏时菜单显示与否
        }
    }

    handleVisibleChange = () => {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const links = [
            { key: "/", text: 'Trang chủ' },
            { key: "/article", text: 'Phần mềm' },
            { key: "/timeline", text: 'Thời gian' },
            { key: "/gather", text: 'Lập trình' },
            { key: "/gossip", text: 'Thông tin' },
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
                                        <Link to="/article" data-key="/article">Phần mềm</Link>
                                        <Link to="/timeline" data-key="/timeline">Thời gian</Link>
                                        <Link to="/gather" data-key="/gather">Lập trình</Link>
                                        <Link to="/gossip" data-key="/gossip">Thông tin</Link>
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