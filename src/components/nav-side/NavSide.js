import React, { Component } from 'react';
import { Link } from "react-router-dom";
import portrait_bg from '../../images/portrait_bg.jpg';
import me from '../../images/avt4.jpg';
import './NavSide.scss';
/* eslint-disable import/first */
import { FastBackwardOutlined, FacebookOutlined, YoutubeOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { Calendar } from 'antd';
class NavSide extends Component {

    render() {
        // const {portrait = {}, articles, categories, tags, links} = this.props;

        return (
            <div className="nav-side">
                <div className="panel user-introduction">
                    <img src={portrait_bg} alt="" />
                    <div className="panel-body">
                        <div className="user-portrait">
                            <img src={me} alt="" />
                            <h3>Cường Nguyễn</h3>
                            <p> Công nghệ 36</p>
                        </div>
                        <div className="statistics">
                            <span className="statistic-item">1996</span>
                            <span className="spliter" />
                            <span className="statistic-item">
                                2021
                            </span>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-heading">FOLLOW ME</div>
                    <div className="panel-body text-center">
                        <p className="follow-link">
                            <a href="https://fb.com/cuongppk" target="_blank" rel="noopener noreferrer"> <FacebookOutlined /></a>
                        </p>
                        <p className="follow-link" style={{ transform: "rotate(0deg)" }}>
                            <a href="https://www.youtube.com/channel/UCIFEDkmDF8gC3MJ-ycu7UoA" target="_blank" rel="noopener noreferrer"> <YoutubeOutlined /></a>
                        </p>
                        <p className="follow-link" style={{ transform: "rotate(0deg)" }}>
                            <a href="https://github.com/cuongyd196" target="_blank" rel="noopener noreferrer"> <GithubOutlined /></a>
                        </p>
                        <p className="follow-link" style={{ transform: "rotate(0deg)" }}>
                            <a href="#" target="_blank" rel="noopener noreferrer"> <MailOutlined /></a>
                        </p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-heading">Số lượng bài viết</div>
                    <div className="panel-body">
                        <ul>
                            <li>
                                20
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-heading">Số lượt truy cập</div>
                    <div className="panel-body">
                        <ul>
                            <li>
                                222
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="panel">
          <div className="panel-heading">Lịch</div>
          <div className="site-calendar-demo-card">
            <Calendar mode={'year'} fullscreen={false} />
          </div>
        </div> */}
            </div>
        )
    }
}

export default NavSide;