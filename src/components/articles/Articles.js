import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import articles from '../../data/articles.json';
import './Articles.scss';

class Articles extends Component {
    render() {
        return (
            <div className="article-list">
                {
                    articles.map(article => {
                        return (
                            <div key={article.id}>
                                <div className="article-item wow zoomIn animated">
                                    <div className="article-body" onMouseOver={this.handleMouseOver}>
                                        <Link to={`/article-detail/${article.id}`}><h4>{article.title}</h4></Link>
                                        <p>
                                            <span>post @ {article.created_at}</span>
                                            &nbsp;&nbsp;&nbsp;
						                    <span>category: {article.theme}</span>
                                            &nbsp;&nbsp;&nbsp;
						                    <span>浏览: {article.views}</span>
                                        </p>
                                        <div className="article-abstract">
                                            {article.abstract} ...
					                    </div>
                                        <span className="article-link"><Link to={`/article-detail/${article.id}`}>阅读全文 >></Link></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Articles;