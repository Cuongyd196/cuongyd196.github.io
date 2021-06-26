import React, { Component } from 'react';
import { Link } from "react-router-dom";
import portrait_bg from '../../images/portrait_bg.jpg';
import me from '../../images/me.jpg';
import ('./NavSide.scss');
/* eslint-disable import/first */
import { FastBackwardOutlined  } from '@ant-design/icons';


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
                            <a href="https://github.com/Marco2333" target="_blank" rel="noopener noreferrer">  <FastBackwardOutlined/></a>
                        </p>
                        <p className="follow-link" style={{ transform: "rotate(180deg)" }}>
                            <a href="https://github.com/Marco2333" target="_blank" rel="noopener noreferrer"> <FastBackwardOutlined/></a>
                        </p>
                        <p className="follow-link" style={{ transform: "rotate(90deg)" }}>
                            <a href="https://github.com/Marco2333" target="_blank" rel="noopener noreferrer"> <FastBackwardOutlined/></a>
                        </p>
                        <p className="follow-link" style={{ transform: "rotate(270deg)" }}>
                            <a href="https://github.com/Marco2333" target="_blank" rel="noopener noreferrer"> <FastBackwardOutlined/></a>
                        </p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-heading">文章列表</div>
                    <div className="panel-body">
                        <ol>
                            <li key='1'>
                                <Link to={`/article-detail/1`}>233</Link>
                            </li>
                            {/*{*/}
                            {/*articles ?*/}
                            {/*articles.map(article => (*/}
                            {/*<li key={article.id}>*/}
                            {/*<Link to={`/article-detail/${article.id}`}>{article.title}</Link>*/}
                            {/*</li>*/}
                            {/*))*/}
                            {/*: ''*/}
                            {/*}*/}
                        </ol>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-heading">文章分类</div>
                    <div className="panel-body">
                        <ul>
                            <li key='2'>
                                <Link to={`/category/2`}>233</Link>
                            </li>
                            {/*{*/}
                            {/*categories ?*/}
                            {/*categories.map(category => (*/}
                            {/*<li key={category.id}>*/}
                            {/*<Link to={`/category/${category.id}`}>{category.theme}</Link>*/}
                            {/*</li>*/}
                            {/*))*/}
                            {/*: ''*/}
                            {/*}*/}
                        </ul>
                    </div>
                </div>
                {/*<div className="panel">*/}
                {/*<div className="panel-heading">云标签</div>*/}
                {/*<div className="panel-body">*/}
                {/*<ICloud tags={tags} />*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="panel">*/}
                {/*<div className="panel-heading">友情链接</div>*/}
                {/*<div className="panel-body">*/}
                {/*<ul>*/}
                {/*{*/}
                {/*links ?*/}
                {/*links.map(link => (*/}
                {/*<li key={link.id}>*/}
                {/*<a href={link.url} target="_blank">{link.text}</a>*/}
                {/*</li>*/}
                {/*))*/}
                {/*: ''*/}
                {/*}*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default NavSide;